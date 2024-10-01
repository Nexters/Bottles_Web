import { ProfileLayout } from '@/components/profile/layout';
import { getServerSideTokens } from '@/features/server/serverSideTokens';
import { ServerFetchBoundary } from '@/store/query/ServerFetchBoundary';
import { bottlesQueryOptions } from '@/store/query/useBottlesQuery';
import { userInfoQueryOptions } from '@/store/query/useUserInfoQuery';
import { HeaderArea } from './HeaderArea';
import { Recommendations } from './Recommendations';

export default function RecommendationsPage() {
  const tokens = getServerSideTokens();
  const serverFetchOptions = [userInfoQueryOptions(tokens), bottlesQueryOptions(tokens)];

  return (
    <ProfileLayout>
      <HeaderArea />
      <ServerFetchBoundary fetchOptions={serverFetchOptions}>
        <Recommendations />
      </ServerFetchBoundary>
    </ProfileLayout>
  );
}
