import { Header } from '@/components/header';
import { getServerSideTokens } from '@/features/server/serverSideTokens';
import { PrefetchBoundary } from '@/store/query/PrefetchBoundary';
import { myInformationQueryOptions } from '@/store/query/useMyInformation';
import { Suspense } from 'react';
import { MyInformation } from './MyInformation';

export default async function MyPage() {
  const prefetchOptions = myInformationQueryOptions(getServerSideTokens());

  return (
    <>
      <Header />
      <Suspense>
        <PrefetchBoundary prefetchOptions={prefetchOptions}>
          <MyInformation />
        </PrefetchBoundary>
      </Suspense>
    </>
  );
}
