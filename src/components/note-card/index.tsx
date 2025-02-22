import clsx from 'classnames';
import dayjs from 'dayjs';
import { useCallback, useMemo } from 'react';
import { useNavigate, Link } from 'react-router';
import removeMd from 'remove-markdown';

import { READING_SPEED } from '@/utils/constants';
import { shortenNumber } from '@/utils/helper';

export const NoteCard = ({ note, left }: { note: NoteMeta; left: boolean }) => {
  const navigate = useNavigate();

  const toNote = useCallback(() => {
    navigate(`/note/${note.title}`);
  }, [note, navigate]);

  const content = useMemo(() => {
    return removeMd(note.content);
  }, [note]);

  return (
    <div
      className={clsx(
        'group mx-2 my-4 flex animate-slide-up-big-in flex-col items-stretch rounded-lg',
        'shadow-[0_.625rem_1.875rem_-.9375rem_var(--box-bg-shadow)]',
        'hover:shadow-[0_0_2rem_var(--box-bg-shadow)]',
        left ? 'md:flex-row' : 'md:flex-row-reverse',
      )}
      style={{
        transition: '0.2s ease-in-out',
      }}
    >
      <div
        className={clsx(
          'h-[14rem] w-full cursor-pointer overflow-hidden rounded-[0.625rem_0.625rem_0_0]',
          '[clip-path:polygon(0px_0px,100%_0px,100%_92%,0px_100%)]',
          'md:[clip-path:polygon(0px_0px,92%_0%,100%_100%,0%_100%)]',
          'md:mr-6 md:w-[50%] md:rounded-[0.625rem_0px_0px_0.625rem]',
        )}
      >
        <img
          className="h-full w-full object-cover group-hover:[transform:scale(1.05)_rotate(1deg)]"
          style={{
            transition: '0.2s ease-in-out',
          }}
          src={note.cover}
          onClick={toNote}
        />
      </div>
      <div
        className="relative flex h-[14rem] w-full flex-col items-stretch px-4 md:w-[50%] md:pl-0 md:pr-6 md:pt-4"
        style={{
          perspective: '62.5rem',
        }}
      >
        <div className="flex items-center justify-end gap-2.5 text-[13px]/[2] text-grey-5">
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
        </div>
        <div
          className="my-2.5 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap text-[1.17em]/[1.5] font-bold text-red"
          onClick={toNote}
        >
          {note.title}
        </div>
        <div className="line-clamp-3 max-h-20 overflow-hidden text-ellipsis text-[0.875em]">
          {content}
        </div>
        <div className="grow" />
        <div className="mb-2 flex items-center gap-1 text-[13px]/[2] text-grey-5">
          <i className="ic i-flag relative top-[2px] mr-1" />
          {note.tags.map((i) => (
            <Link key={i} to={`/tag/${i}`}>
              {i}
            </Link>
          ))}
        </div>
        <div
          className={clsx(
            'absolute bottom-0 right-0 cursor-pointer rounded-[1rem_0] px-4 py-1 text-grey-0',
            'hover:[transform:translateZ(2.5rem)]',
          )}
          style={{
            background: 'linear-gradient(to right,var(--color-pink) 0,var(--color-orange) 100%)',
            transition: '0.2s ease-in-out',
          }}
          onClick={toNote}
        >
          more...
        </div>
      </div>
    </div>
  );
};
