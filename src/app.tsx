import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import initMouseFirework from 'mouse-firework';
import { Toaster } from 'react-hot-toast';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

import { useAppStore } from './store/app';
import { CatLoading } from '@/components/cat-loading';

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
    element: <Outlet />,
    children: [
      {
        path: '/',
        index: true,
        lazy: async () => {
          const { Home } = await import('@/pages/home');
          return { Component: Home };
        },
      },
    ],
  },
]);

function App() {
  const { loading } = useAppStore();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      {loading && <CatLoading />}
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
