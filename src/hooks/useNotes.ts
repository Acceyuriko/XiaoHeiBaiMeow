import { useQuery } from '@tanstack/react-query';

export const useNotes = () => {
  return useQuery({
    queryKey: ['listNotes'],
    queryFn: async () => {
      const res = await fetch('/notes.json');
      return (await res.json()) as {
        notes: NoteMeta[];
        tags: string[];
      };
    },
  });
};
