import { useNotes } from '@/hooks/useNotes';

export const Home = () => {
  const { data } = useNotes();

  console.log(data);

  return <div className="relative h-[10000px] w-full">Home</div>;
};
