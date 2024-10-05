import { ProfileLayout } from '@/components/profile/layout';
import { getServerSideTokens } from '@/features/server/serverSideTokens';
import { ServerFetchBoundary } from '@/store/query/ServerFetchBoundary';
import { recommendationBottlesQueryOptions } from '@/store/query/useRecommendationBottlesQuery';
import { userInfoQueryOptions } from '@/store/query/useUserInfoQuery';
import { Suspense } from 'react';
import { HeaderArea } from './HeaderArea';
import { Recommendations } from './Recommendations';

export default function RecommendationsPage() {
  const tokens = getServerSideTokens();
  const serverFetchOptions = [userInfoQueryOptions(tokens), recommendationBottlesQueryOptions(tokens)];

  return (
    <ProfileLayout hasCTAButton={false}>
      <HeaderArea />
      <Suspense>
        <ServerFetchBoundary fetchOptions={serverFetchOptions}>
          <Recommendations />
        </ServerFetchBoundary>
      </Suspense>
    </ProfileLayout>
  );
}
