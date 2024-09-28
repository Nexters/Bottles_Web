import { getServerSideTokens } from '@/features/server/serverSideTokens';
import { ServerFetchBoundary } from '@/store/query/ServerFetchBoundary';
import { currentUserProfileQueryOptions } from '@/store/query/useCurrentUserProfileQuery';
import type { ReactNode } from 'react';

export default async function CreateIntroLayout({ children }: { children: ReactNode }) {
  const tokens = getServerSideTokens();

  return <ServerFetchBoundary fetchOptions={currentUserProfileQueryOptions(tokens)}>{children}</ServerFetchBoundary>;
}
