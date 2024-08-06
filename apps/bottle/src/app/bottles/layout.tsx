import { PrefetchBoundary } from '@/features/query/PrefetchBoundary';
import { bottlesQueryOptions } from '@/features/query/useBottlesQuery';
import { userInfoQueryOptions } from '@/features/query/useNameQuery';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { ReactNode, Suspense } from 'react';

export default function BottlesLayout({ children }: { children: ReactNode }) {
  const accessToken = getCookie('accessToken', { cookies }) ?? '';
  const prefetchOptions = [userInfoQueryOptions(accessToken), bottlesQueryOptions(accessToken)];

  return (
    <Suspense>
      <PrefetchBoundary prefetchOptions={prefetchOptions}>{children}</PrefetchBoundary>
    </Suspense>
  );
}
