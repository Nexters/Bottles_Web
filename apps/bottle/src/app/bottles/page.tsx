import { getServerSideTokens } from '@/features/server/serverSideTokens';
import { Suspense } from 'react';
import { PrefetchBoundary } from '../../store/query/PrefetchBoundary';
import { bottlesQueryOptions } from '../../store/query/useBottlesQuery';
import { userInfoQueryOptions } from '../../store/query/useNameQuery';
import { Bottles } from './Bottles';

export default function BottlesPage() {
  const tokens = getServerSideTokens();
  const prefetchOptions = [userInfoQueryOptions(tokens), bottlesQueryOptions(tokens)];

  return (
    <Suspense>
      <PrefetchBoundary prefetchOptions={prefetchOptions}>
        <Bottles />
      </PrefetchBoundary>
    </Suspense>
  );
}
