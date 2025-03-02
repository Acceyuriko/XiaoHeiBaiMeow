import React, { useEffect } from 'react';

import { CatLoading } from './cat-loading';
import { useAppStore } from '@/store/app';
import { scrollToTop } from '@/utils/helper';

export const Body = ({
  children,
  isLoading,
  title,
  subTitle,
}: React.PropsWithChildren & {
  isLoading: boolean;
  title?: string;
  subTitle?: React.ReactNode;
}) => {
  const { setTitle, setSubTitle } = useAppStore();

  useEffect(() => {
    if (title) {
      setTitle(title);
    }
    if (subTitle) {
      setSubTitle(subTitle);
    }

    return () => {
      setTitle('');
      setSubTitle(undefined);
    };
  }, [title, subTitle, setTitle, setSubTitle]);

  useEffect(() => {
    scrollToTop();
  }, []);

  if (isLoading) {
    return (
      <div className="relative h-80 w-full">
        <CatLoading />
      </div>
    );
  }

  return (
    <div className="mx-[5px] mb-5 flex animate-slide-up-big-in flex-col items-stretch p-2.5 md:p-5">
      {children}
    </div>
  );
};
