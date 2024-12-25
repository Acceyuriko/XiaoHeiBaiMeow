import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

import { useAppStore } from './store/app';
import { CatLoading } from '@/components/cat-loading';

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
