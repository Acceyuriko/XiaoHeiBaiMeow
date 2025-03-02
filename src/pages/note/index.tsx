import clsx from 'classnames';
import dayjs from 'dayjs';
import { useEffect, useMemo, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router';

import { Appreciate } from '@/components/appreciate';
import { CatLoading } from '@/components/cat-loading';
import { useNotes } from '@/hooks/useNotes';
import { useAppStore } from '@/store/app';
import { COLOR_CLASSES, READING_SPEED } from '@/utils/constants';
import { renderMarkdown, scrollToTop, shortenNumber } from '@/utils/helper';

export const Note = () => {
  const { title } = useParams<{ title: string }>();
  const navigate = useNavigate();
  const { setSubTitle, setTitle } = useAppStore();

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

    setSubTitle(
      <div className="flex flex-wrap items-center justify-end gap-2.5 leading-[2] text-grey-0">
        <div className="flex items-center gap-1">
          <i className="ic i-calendar" />
          <span>{dayjs(note.createdAt).format('YYYY-MM-DD HH:mm')}</span>
        </div>
        <div className="flex items-center gap-1">
          <i className="ic i-pen" />
          <span>{shortenNumber(note.charactors)}字</span>
        </div>
        <div className="flex items-center gap-1">
          <i className="ic i-clock" />
          <span>{Math.ceil(note.charactors / READING_SPEED)}分钟</span>
        </div>
      </div>,
    );
    setTitle(note.title);
    const content = renderMarkdown(note.content, note.title);
    noteRef.current.innerHTML = content;
    scrollToTop();
  }, [note, setSubTitle, setTitle]);

  useEffect(() => {
    return () => {
      setSubTitle(undefined);
      setTitle('');
    };
  }, [setSubTitle, setTitle]);

  if (!note) {
    return (
      <div className="relative h-80 w-full">
        <CatLoading />
      </div>
    );
  }

  return (
    <div className="mx-[5px] mb-5 flex animate-slide-up-big-in flex-col items-stretch p-2 md:p-5">
      <div className="markdown md:px-8" ref={noteRef}></div>
      <div className="mt-5 flex items-center gap-2 md:mx-8">
        {note.tags.map((i) => (
          <Link
            key={i}
            to={`/tag/${i}`}
            className={clsx(
              'relative flex items-center rounded-[5px] px-[5px]',
              COLOR_CLASSES[(Math.random() * COLOR_CLASSES.length) | 0],
              'bg-[--note-bg] text-[--note-text]',
            )}
          >
            <i className="ic i-tag" />
            <span>{i}</span>
          </Link>
        ))}
      </div>
      <div>
        <Appreciate />
      </div>
      <div className="flex flex-col items-stretch rounded-[10px] bg-grey-2 px-8 py-4 text-[0.75em] text-grey-6 md:mx-8">
        <div>
          <i className="ic i-person mr-[5px]" />
          <strong>本文作者：</strong>
          <span>江江大佬</span>
        </div>
        <div>
          <i className="ic i-link-circle mr-[5px]" />
          <strong>本文链接：</strong>
          <a className="cursor-pointer break-all hover:text-blue" href={window.location.href}>
            {window.location.href}
          </a>
        </div>
        <div>
          <i className="ic i-share mr-[5px]" />
          <strong>版权声明：</strong>
          <span>
            本站所有文章除特别声明外，均采用 <i className="ic i-creative-commons" />
            BY-NC-SA 许可协议。转载请注明出处！
          </span>
        </div>
      </div>
    </div>
  );
};
