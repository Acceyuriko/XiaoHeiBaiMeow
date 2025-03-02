import dayjs from 'dayjs';
import { Link } from 'react-router';

import { Body } from '@/components/body';
import { Timeline } from '@/components/timeline';
import { useNotes } from '@/hooks/useNotes';

export const Archives = () => {
  const { data, isLoading } = useNotes();

  return (
    <Body isLoading={isLoading || !data} title={'归档'} subTitle={<span></span>}>
      <Timeline
        data={data!.notes
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
    </Body>
  );
};
