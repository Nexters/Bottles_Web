import { type FetchQueryOptions, HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import type { ReactNode } from 'react';

export type FetchOptions = Pick<FetchQueryOptions, 'queryKey' | 'queryFn'>;

type Props = {
  fetchOptions: FetchOptions[] | FetchOptions;
  children: ReactNode | ReactNode[];
};

export async function ServerFetchBoundary({ fetchOptions, children }: Props) {
  const queryClient = new QueryClient();

  Array.isArray(fetchOptions)
    ? await Promise.all(fetchOptions.map(prefetchOption => queryClient.fetchQuery(prefetchOption)))
    : await queryClient.fetchQuery(fetchOptions);

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}
