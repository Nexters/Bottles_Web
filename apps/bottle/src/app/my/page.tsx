import { getServerSideTokens } from '@/features/server/serverSideTokens';
import { ServerFetchBoundary } from '@/store/query/ServerFetchBoundary';
import { myInformationQueryOptions } from '@/store/query/useMyInformation';
import { Suspense } from 'react';
import { MyInformation } from './MyInformation';

export default async function MyPage() {
  const serverFetchOptions = myInformationQueryOptions(getServerSideTokens());

  return (
    <>
      <Suspense>
        <ServerFetchBoundary fetchOptions={serverFetchOptions}>
          <MyInformation />
        </ServerFetchBoundary>
      </Suspense>
    </>
  );
}
