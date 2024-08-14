import { getServerSideTokens } from '@/features/server/serverSideTokens';
import { StepProvider } from '@/features/steps/StepProvider';
import { ServerFetchBoundary } from '@/store/query/ServerFetchBoundary';
import { userInfoQueryOptions } from '@/store/query/useNameQuery';
import { regionsQueryOptions } from '@/store/query/useRegionsQuery';
import { ReactNode, Suspense } from 'react';
import { CreateProfileProvider } from './CreateProfileProvider';

export default async function CreateProfileLayout({ children }: { children: ReactNode }) {
  const serverFetchOptions = [regionsQueryOptions(getServerSideTokens()), userInfoQueryOptions(getServerSideTokens())];

  return (
    <Suspense>
      <ServerFetchBoundary fetchOptions={serverFetchOptions}>
        <CreateProfileProvider>
          <StepProvider maxStep={10} uri="/create-profile">
            {children}
          </StepProvider>
        </CreateProfileProvider>
      </ServerFetchBoundary>
    </Suspense>
  );
}
