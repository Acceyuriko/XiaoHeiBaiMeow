import dayjs from 'dayjs';
import { useEffect } from 'react';
import { Link } from 'react-router';

import { CatLoading } from '@/components/cat-loading';
import { Timeline } from '@/components/timeline';
import { useNotes } from '@/hooks/useNotes';
import { useAppStore } from '@/store/app';

export const Archives = () => {
  const { data, isLoading } = useNotes();
  const { setTitle, setSubTitle } = useAppStore();

  useEffect(() => {
    setTitle('归档');
    setSubTitle(<span></span>);
    return () => {
      setTitle('');
      setSubTitle(undefined);
    };
  }, [setTitle, setSubTitle]);

  if (isLoading || !data) {
    return (
      <div className="relative h-80 w-full">
        <CatLoading />
      </div>
    );
  }

  return (
    <div className="mx-[5px] mb-5 flex animate-slide-up-big-in flex-col items-stretch p-2 md:p-5">
      <Timeline
        data={data.notes
          .sort((a, b) => b.createdAt - a.createdAt)
          .map((item) => {
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
