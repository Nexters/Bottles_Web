'use client';

import { isServer, QueryClient, QueryClientProvider as _QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        gcTime: Infinity,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export function QueryClientProvider({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();

  return <_QueryClientProvider client={queryClient}>{children}</_QueryClientProvider>;
}
