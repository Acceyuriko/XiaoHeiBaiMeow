import { useEffect } from 'react';

import { useAppStore } from '@/store/app';

export const Home = () => {
  const { setLoading } = useAppStore();

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return <div className="">Home</div>;
};
