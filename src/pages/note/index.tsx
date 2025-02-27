import { useEffect, useMemo, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';
import anime from 'theme-shokax-anime';

import { Appreciate } from '@/components/appreciate';
import { CatLoading } from '@/components/cat-loading';
import { useNotes } from '@/hooks/useNotes';
import { useAppStore } from '@/store/app';
import { renderMarkdown } from '@/utils/helper';

export const Note = () => {
  const { title } = useParams<{ title: string }>();
  const navigate = useNavigate();
  const { setNote } = useAppStore();

  const { data } = useNotes();

  const noteRef = useRef<HTMLDivElement>(null);

  const note = useMemo(() => {
    return data?.notes.find((i) => i.title === title);
  }, [data, title]);

  useEffect(() => {
    if (data && !note) {
      navigate('/404');
    }
  }, [data, note, navigate]);

  useEffect(() => {
    if (!note || !noteRef.current) {
      return;
    }
    setNote(note);
    const content = renderMarkdown(note.content, note.title);
    noteRef.current.innerHTML = content;
    anime({
      targets: document.documentElement,
      duration: 500,
      easing: 'easeInOutQuad',
      scrollTop: 0,
    }).play();
  }, [note, setNote]);

  useEffect(() => {
    return () => {
      setNote(undefined);
    };
  }, [setNote]);

  if (!note) {
    return (
      <div className="relative h-80 w-full">
        <CatLoading />
      </div>
    );
  }

  return (
    <div className="mx-[5px] flex animate-slide-up-big-in flex-col items-stretch p-2 md:p-5">
      <div className="markdown md:px-8" ref={noteRef}></div>
      <div>
        <Appreciate />
      </div>
    </div>
  );
};
