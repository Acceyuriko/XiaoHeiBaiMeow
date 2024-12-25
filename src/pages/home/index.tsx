import { useEffect } from 'react';

import { useAppStore } from '@/store/app';

export const Home = () => {
  const { setLoading } = useAppStore();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [setLoading]);

  return <div className="">Home</div>;
};
