import dayjs from 'dayjs';
import { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router';

import { CatLoading } from '@/components/cat-loading';
import { Timeline } from '@/components/timeline';
import { useNotes } from '@/hooks/useNotes';
import { useAppStore } from '@/store/app';

export const Tag = () => {
  const { tag } = useParams<{ tag: string }>();
  const { setTitle, setSubTitle } = useAppStore();
  const { data } = useNotes();

  useEffect(() => {
    setTitle(`包含标签“${tag}”的文章`);
    setSubTitle(<span></span>);
    return () => {
      setTitle('');
      setSubTitle(undefined);
    };
  }, [setTitle, setSubTitle, tag]);

  const notes = useMemo(() => {
    return (data?.notes.filter((i) => i.tags.includes(tag!)) || []).sort(
      (a, b) => b.createdAt - a.createdAt,
    );
  }, [data, tag]);

  if (!data) {
    return (
      <div className="relative h-80 w-full">
        <CatLoading />
      </div>
    );
  }

  return (
    <div className="mx-[5px] mb-5 animate-slide-up-big-in p-2 md:p-5">
      <Timeline
        data={notes.map((item) => {
          return {
            content: (
              <div>
                <span className="mr-2.5 text-[0.75em] text-grey-4">
                  {dayjs(item.createdAt).format('MM-DD')}
                </span>
                <Link
                  to={`/note/${item.title}`}
                  className="cursor-pointer leading-[2] text-red hover:text-blue"
                  style={{
                    transition: 'all 0.2s ease-in-out',
                  }}
                >
                  {item.title}
                </Link>
              </div>
            ),
            time: item.createdAt,
          };
        })}
      />
    </div>
  );
};
