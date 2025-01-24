import { Outlet } from 'react-router';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { Waves } from '@/components/waves';

export const Layout = () => {
  return (
    <>
      <Header />
      <Waves />
      <main
        className="relative"
        style={{
          background:
            'linear-gradient(to top,var(--body-bg-shadow) 0,rgb(var(--color-grey-1)) 20%) no-repeat bottom',
        }}
      >
        <div className="mx-auto flex items-start justify-center gap-3">
          <div
            className="min-h-[37.5rem] w-full max-w-[1024px]"
            style={{
              background:
                'linear-gradient(to top,rgb(var(--color-grey-0)) 0,rgb(var(--color-grey-1)) 20%) no-repeat top',
              boxShadow: '0 1.25rem 1rem .3125rem var(--body-bg-shadow)',
            }}
          >
            <Outlet />
            <Footer />
          </div>
          <Sidebar />
        </div>
      </main>
    </>
  );
};
