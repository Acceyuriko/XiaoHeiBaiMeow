import dayjs from 'dayjs';
import { useMemo } from 'react';
import { useParams, Link } from 'react-router';

import { Body } from '@/components/body';
import { Timeline } from '@/components/timeline';
import { useNotes } from '@/hooks/useNotes';

export const Tag = () => {
  const { tag } = useParams<{ tag: string }>();
  const { data } = useNotes();

  const notes = useMemo(() => {
    return (data?.notes.filter((i) => i.tags.includes(tag!)) || []).sort(
      (a, b) => b.createdAt - a.createdAt,
    );
  }, [data, tag]);

  return (
    <Body isLoading={!data} title={`包含标签“${tag}”的文章`} subTitle={<span></span>}>
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
    </Body>
  );
};
