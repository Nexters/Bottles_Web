import { PrefetchBoundary } from '@/features/query/PrefetchBoundary';
import { bottleDetailQueryOptions } from '@/features/query/useBottleDetailQuery';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { BottleDetail } from './BottleDetail';

interface Props {
  params: {
    id: string;
  };
}

export default function BottleItemPage({ params: { id } }: Props) {
  const accessToken = getCookie('accessToken', { cookies }) ?? '';
  const prefetchOptions = bottleDetailQueryOptions(accessToken, Number(id));
  return (
    <Suspense>
      <PrefetchBoundary prefetchOptions={prefetchOptions}>
        <BottleDetail id={Number(id)} />
      </PrefetchBoundary>
    </Suspense>
  );
}
