import { Header } from '@/components/header';
import { Asset } from '@bottlesteam/ui';
import { ProfileArea } from './ProfileArea';
import { Suspense } from 'react';
import { myInformationQueryOptions } from '@/store/query/useMyInformation';
import { getServerSideTokens } from '@/features/server/serverSideTokens';
import { ServerFetchBoundary } from '@/store/query/ServerFetchBoundary';

export default function ProfileEditPage() {
  const prefetchOptions = myInformationQueryOptions(getServerSideTokens());

  return (
    <>
      <Header>{<Asset type="icon-arrow-left" />}</Header>
      <Suspense>
        <ServerFetchBoundary fetchOptions={prefetchOptions}>
          <ProfileArea />
        </ServerFetchBoundary>
      </Suspense>
    </>
  );
}
