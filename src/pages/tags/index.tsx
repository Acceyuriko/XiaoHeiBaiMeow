import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { TagCloud } from 'react-tagcloud';

import { CatLoading } from '@/components/cat-loading';
import { useNotes } from '@/hooks/useNotes';
import { useAppStore } from '@/store/app';

export const Tags = () => {
  const navigate = useNavigate();
  const { setTitle, setSubTitle } = useAppStore();
  const { data } = useNotes();

  useEffect(() => {
    setTitle('全部标签');
    setSubTitle(<span></span>);
    return () => {
      setTitle('');
      setSubTitle(undefined);
    };
  }, [setTitle, setSubTitle]);

  const tags = useMemo(() => {
    if (!data) {
      return [] as { value: string; count: number }[];
    }
    const map = new Map<string, number>();
    data.notes.forEach((i) => {
      i.tags.forEach((j) => {
        if (map.has(j)) {
          map.set(j, map.get(j)! + 1);
        } else {
          map.set(j, 1);
        }
      });
    });
    return Array.from(map).map((i) => ({
      value: i[0],
      count: i[1],
    }));
  }, [data]);

  if (!data) {
    return (
      <div className="relative h-80 w-full">
        <CatLoading />
      </div>
    );
  }

  return (
    <div className="mx-[5px] mb-5 animate-slide-up-big-in p-2 md:p-5">
      <TagCloud
        className="[&>*]:cursor-pointer"
        minSize={18}
        maxSize={36}
        tags={tags}
        onClick={(tag) => navigate(`/tag/${tag.value}`)}
      />
    </div>
  );
};
