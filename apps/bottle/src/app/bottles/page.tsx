import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { PrefetchBoundary } from '../../store/query/PrefetchBoundary';
import { bottlesQueryOptions } from '../../store/query/useBottlesQuery';
import { userInfoQueryOptions } from '../../store/query/useNameQuery';
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
