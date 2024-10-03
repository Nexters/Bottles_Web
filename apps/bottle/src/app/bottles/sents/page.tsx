import { Header } from '@/components/common/header';
import { ProfileLayout } from '@/components/profile/layout';
import { getServerSideTokens } from '@/features/server/serverSideTokens';
import { ServerFetchBoundary } from '@/store/query/ServerFetchBoundary';
import { sentBottlesQueryOptions } from '@/store/query/useSentBottlesQuery';
import { userInfoQueryOptions } from '@/store/query/useUserInfoQuery';
import { Suspense } from 'react';
import { Sents } from './Sents';

export default function SentBottlesPage() {
  const tokens = getServerSideTokens();
  const serverFetchOptions = [userInfoQueryOptions(tokens), sentBottlesQueryOptions(tokens)];

  return (
    <ProfileLayout hasCTAButton={false}>
      <Header />
      <Suspense>
        <ServerFetchBoundary fetchOptions={serverFetchOptions}>
          <Sents />
        </ServerFetchBoundary>
      </Suspense>
    </ProfileLayout>
  );
}
