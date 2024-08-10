import { FetchQueryOptions, HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

export type PrefetchOptions = Pick<FetchQueryOptions, 'queryKey' | 'queryFn'>;

type Props = {
  prefetchOptions: PrefetchOptions[] | PrefetchOptions;
  children: React.ReactNode;
};

export async function PrefetchBoundary({ prefetchOptions, children }: Props) {
  const queryClient = new QueryClient();

  Array.isArray(prefetchOptions)
    ? await Promise.all(prefetchOptions.map(prefetchOption => queryClient.prefetchQuery(prefetchOption)))
    : await queryClient.prefetchQuery(prefetchOptions);

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}
