import { useMemo } from 'react';
import { useNavigate } from 'react-router';
import { TagCloud } from 'react-tagcloud';

import { Body } from '@/components/body';
import { useNotes } from '@/hooks/useNotes';

export const Tags = () => {
  const navigate = useNavigate();
  const { data } = useNotes();

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

  return (
    <Body isLoading={!data} title="全部标签" subTitle={<span></span>}>
      <TagCloud
        className="[&>*]:cursor-pointer"
        minSize={18}
        maxSize={36}
        tags={tags}
        onClick={(tag) => navigate(`/tag/${tag.value}`)}
      />
    </Body>
  );
};
