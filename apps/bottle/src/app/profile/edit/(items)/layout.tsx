import { ProfileLayout } from '@/components/profile/layout';
import { getServerSideTokens } from '@/features/server/serverSideTokens';
import { ServerFetchBoundary } from '@/store/query/ServerFetchBoundary';
import { currentUserProfileQueryOptions } from '@/store/query/useCurrentUserProfileQuery';
import { ReactNode, Suspense } from 'react';
import { HeaderArea } from './HeaderArea';

interface Props {
  children: ReactNode;
}

export default function ItemEditLayout({ children }: Props) {
  const prefetchOptions = currentUserProfileQueryOptions(getServerSideTokens());

  return (
    <ProfileLayout>
      <HeaderArea />
      <Suspense>
        <ServerFetchBoundary fetchOptions={prefetchOptions}>{children}</ServerFetchBoundary>
      </Suspense>
    </ProfileLayout>
  );
}
