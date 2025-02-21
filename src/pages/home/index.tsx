import { useMemo, useState } from 'react';

import { CatLoading } from '@/components/cat-loading';
import { NoteCard } from '@/components/note-card';
import { Pagination } from '@/components/pagination';
import { useNotes } from '@/hooks/useNotes';

const PAGE_SIZE = 10;

export const Home = () => {
  const { data } = useNotes();
  const [page, setPage] = useState(1);

  const { notes, lastNote } = useMemo(() => {
    const notes = data?.notes || [];
    return {
      notes: notes.slice(0, -1),
      lastNote: notes[notes.length - 1],
    };
  }, [data]);

  const totalPage = Math.ceil(notes.length / PAGE_SIZE);

  const divideLine = useMemo(() => {
    return (
      <div
        className="h-4 grow"
        style={{
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAACCAYAAACuTHuKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OThBRDY4OUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OThBRDY4QUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5OEFENjg3Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5OEFENjg4Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VU513gAAADVJREFUeNrs0DENACAQBDBIWLGBJQby/mUcJn5sJXQmOQMAAAAAAJqt+2prAAAAAACg2xdgANk6BEVuJgyMAAAAAElFTkSuQmCC")',
        }}
      />
    );
  }, []);

  if (!lastNote) {
    return (
      <div className="relative h-80">
        <CatLoading />
      </div>
    );
  }

  return (
    <div className="relative mx-[5px] mb-5 flex flex-col items-stretch p-2.5">
      {page === 1 && (
        <>
          <div className="my-4 flex items-center justify-center text-[24px]/[1] font-light tracking-wider text-grey-4">
            {divideLine}
            <span className="mx-4 whitespace-nowrap">置顶文章</span>
            {divideLine}
          </div>
          <NoteCard note={lastNote} />
          <div className="my-4 flex items-center justify-center text-[24px]/[1] font-light tracking-wider text-grey-4">
            {divideLine}
            <span className="mx-4 whitespace-nowrap">文章列表</span>
            {divideLine}
          </div>
        </>
      )}
      {notes.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map((i) => (
        <NoteCard key={i.createdAt} note={i} />
      ))}
      <Pagination
        page={page}
        totalPage={totalPage}
        onChange={(next) => {
          setPage(next);
        }}
      />
    </div>
  );
};
