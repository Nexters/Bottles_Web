import { getServerSideTokens } from '@/features/server/serverSideTokens';
import { ServerFetchBoundary } from '@/store/query/ServerFetchBoundary';
import { profileImagesQueryOptions } from '@/store/query/useProfileImagesQuery';
import { ReactNode, Suspense } from 'react';

export default function ProfileImagesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense>
        <ServerFetchBoundary fetchOptions={profileImagesQueryOptions(getServerSideTokens())}>
          {children}
        </ServerFetchBoundary>
      </Suspense>
    </>
  );
}
