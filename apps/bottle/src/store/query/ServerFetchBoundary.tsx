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

  if (Array.isArray(fetchOptions)) {
    for (const option of fetchOptions) {
      await queryClient.fetchQuery(option);
    }
  } else {
    await queryClient.fetchQuery(fetchOptions);
  }

  // Array.isArray(fetchOptions)
  //   ? await Promise.all(fetchOptions.map(prefetchOption => queryClient.prefetchQuery(prefetchOption)))
  //   : await queryClient.prefetchQuery(fetchOptions);

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}
