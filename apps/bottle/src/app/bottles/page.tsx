import { PrefetchBoundary } from '@/features/query/PrefetchBoundary';
import { bottlesQueryOptions } from '@/features/query/useBottlesQuery';
import { userInfoQueryOptions } from '@/features/query/useNameQuery';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { Bottles } from './Bottles';

export default function BottlesPage() {
  const accessToken = getCookie('accessToken', { cookies }) ?? '';
  const prefetchOptions = [userInfoQueryOptions(accessToken), bottlesQueryOptions(accessToken)];

  return (
    <Suspense>
      <PrefetchBoundary prefetchOptions={prefetchOptions}>
        <Bottles />
      </PrefetchBoundary>
    </Suspense>
  );
}
