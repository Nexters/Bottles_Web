import { getServerSideTokens } from '@/features/server/serverSideTokens';
import { ServerFetchBoundary } from '@/store/query/ServerFetchBoundary';
import { myInformationQueryOptions } from '@/store/query/useMyInformation';
import { MyInformation } from './MyInformation';

export default async function MyPage() {
  const serverFetchOptions = myInformationQueryOptions(getServerSideTokens());

  return (
    <>
      <ServerFetchBoundary fetchOptions={serverFetchOptions}>
        <MyInformation />
      </ServerFetchBoundary>
    </>
  );
}
