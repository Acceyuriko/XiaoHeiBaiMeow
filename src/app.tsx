import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

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
        lazy: async () => {
          const { Home } = await import('@/pages/home');
          return { Component: Home };
        },
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <React.Suspense fallback={<div></div>}>
        <RouterProvider router={router}></RouterProvider>
      </React.Suspense>
    </QueryClientProvider>
  );
}

export default App;
