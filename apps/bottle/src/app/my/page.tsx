import { getServerSideTokens } from '@/features/server/serverSideTokens';
import { ServerFetchBoundary } from '@/store/query/ServerFetchBoundary';
import { currentUserProfileQueryOptions } from '@/store/query/useCurrentUserProfileQuery';
import { Suspense } from 'react';
import { MyInformation } from './MyInformation';

export default async function MyPage() {
  const serverFetchOptions = currentUserProfileQueryOptions(getServerSideTokens());

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
