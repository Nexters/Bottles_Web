import { getServerSideTokens } from '@/features/server/serverSideTokens';
import { ServerFetchBoundary } from '@/store/query/ServerFetchBoundary';
import { regionsQueryOptions } from '@/store/query/useRegionsQuery';
import { userInfoQueryOptions } from '@/store/query/useUserInfoQuery';
import type { ReactNode } from 'react';

export default async function CreateProfileLayout({ children }: { children: ReactNode }) {
  const tokens = getServerSideTokens();

  const serverFetchOptions = [regionsQueryOptions(tokens), userInfoQueryOptions(tokens)];

  return <ServerFetchBoundary fetchOptions={serverFetchOptions}>{children}</ServerFetchBoundary>;
}
