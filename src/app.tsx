import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import initMouseFirework from 'mouse-firework';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider, createBrowserRouter } from 'react-router';

import { Layout } from './layout';
import { useAppStore } from './store/app';

initMouseFirework({
  excludeElements: ['a'],
  particles: [
    {
      shape: 'circle',
      move: ['emit'],
      easing: 'easeOutExpo',
      colors: [
        'rgba(255,182,185,.9)',
        'rgba(250,227,217,.9)',
        'rgba(187,222,214,.9)',
        'rgba(138,198,209,.9)',
      ],
      number: 30,
      duration: [1200, 1800],
      shapeOptions: {
        radius: [16, 32],
      },
    },
    {
      shape: 'circle',
      move: ['diffuse'],
      easing: 'easeOutExpo',
      colors: ['#fff'],
      number: 1,
      duration: [1200, 1800],
      shapeOptions: {
        radius: 20,
        alpha: 0.5,
        lineWidth: 6,
      },
    },
  ],
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // We default the stale time to 5 minutes, which is an arbitrary number selected to
      // strike the balance between stale data and cache hits.
      // Individual queries can override this value based on their caching needs.
      staleTime: 5 * 60 * 1000,
      refetchInterval: false,
      refetchIntervalInBackground: false,
      // TODO: re-enable/remove when api is healthy ===>
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      //<======
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    hydrateFallbackElement: <></>,
    children: [
      {
        path: '/',
        index: true,
        lazy: async () => {
          const { Home } = await import('@/pages/home');
          return { Component: Home };
        },
      },
      {
        path: '/about',
        lazy: async () => {
          const { About } = await import('@/pages/about');
          return { Component: About };
        },
      },
      {
        path: '/archives',
        lazy: async () => {
          const { Archives } = await import('@/pages/archives');
          return { Component: Archives };
        },
      },
      {
        path: '*',
        lazy: async () => {
          const { Page404 } = await import('@/pages/404');
          return { Component: Page404 };
        },
      },
    ],
  },
]);

function App() {
  const { loading } = useAppStore();

  useEffect(() => {
    const ele = document.querySelector('#loading');
    if (!ele) {
      return;
    }
    (ele as HTMLDivElement).style.display = loading ? 'block' : 'none';
  }, [loading]);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
