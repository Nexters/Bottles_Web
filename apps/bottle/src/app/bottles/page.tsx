import { getServerSideTokens } from '@/features/server/serverSideTokens';
import { ServerFetchBoundary } from '../../store/query/ServerFetchBoundary';
import { bottlesQueryOptions } from '../../store/query/useBottlesQuery';
import { userInfoQueryOptions } from '../../store/query/useUserInfoQuery';
import { Bottles } from './Bottles';

export default function BottlesPage() {
  const tokens = getServerSideTokens();
  const serverFetchOptions = [userInfoQueryOptions(tokens), bottlesQueryOptions(tokens)];

  return (
    <ServerFetchBoundary fetchOptions={serverFetchOptions}>
      <Bottles />
    </ServerFetchBoundary>
  );
}
