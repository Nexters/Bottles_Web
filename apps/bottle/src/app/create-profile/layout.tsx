import { getServerSideTokens } from '@/features/server/serverSideTokens';
import { StepProvider } from '@/features/steps/StepProvider';
import { ServerFetchBoundary } from '@/store/query/ServerFetchBoundary';
import { userInfoQueryOptions } from '@/store/query/useUserInfoQuery';
import { regionsQueryOptions } from '@/store/query/useRegionsQuery';
import { ReactNode, Suspense } from 'react';

export default async function CreateProfileLayout({ children }: { children: ReactNode }) {
  const tokens = getServerSideTokens();

  const serverFetchOptions = [regionsQueryOptions(tokens), userInfoQueryOptions(tokens)];

  return (
    <Suspense>
      <ServerFetchBoundary fetchOptions={serverFetchOptions}>
        <StepProvider maxStep={10} uri="/create-profile">
          {children}
        </StepProvider>
      </ServerFetchBoundary>
    </Suspense>
  );
}
