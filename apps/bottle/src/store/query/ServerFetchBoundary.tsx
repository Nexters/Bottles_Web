import { type FetchQueryOptions, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { getQueryClient } from './getQueryClient';

export type FetchOptions = Pick<FetchQueryOptions, 'queryKey' | 'queryFn'>;

type Props = {
  fetchOptions: FetchOptions[] | FetchOptions;
  children: ReactNode | ReactNode[];
};

export async function ServerFetchBoundary({ fetchOptions, children }: Props) {
  const queryClient = getQueryClient();

  Array.isArray(fetchOptions)
    ? Promise.all(fetchOptions.map(prefetchOption => queryClient.fetchQuery(prefetchOption)))
    : queryClient.fetchQuery(fetchOptions);

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}
