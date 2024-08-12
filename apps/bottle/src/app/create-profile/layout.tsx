import { getServerSideTokens } from '@/features/server/serverSideTokens';
import { StepProvider } from '@/features/steps/StepProvider';
import { PrefetchBoundary } from '@/store/query/PrefetchBoundary';
import { userInfoQueryOptions } from '@/store/query/useNameQuery';
import { regionsQueryOptions } from '@/store/query/useRegionsQuery';
import { ReactNode, Suspense } from 'react';
import { CreateProfileProvider } from './CreateProfileProvider';

export default async function CreateProfileLayout({ children }: { children: ReactNode }) {
  const prefetchOptions = [regionsQueryOptions(getServerSideTokens()), userInfoQueryOptions(getServerSideTokens())];

  return (
    <Suspense>
      <PrefetchBoundary prefetchOptions={prefetchOptions}>
        <CreateProfileProvider>
          <StepProvider maxStep={10} uri="/create-profile">
            {children}
          </StepProvider>
        </CreateProfileProvider>
      </PrefetchBoundary>
    </Suspense>
  );
}
