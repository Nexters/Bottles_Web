import { GET, createInit } from '@/features/server';
import { Tokens } from '@/features/server/auth';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { CurrentUser } from '@/models/user';
import { UseSuspenseQueryOptions, useSuspenseQuery } from '@tanstack/react-query';

export const currentUserProfileQueryOptions = (tokens: Tokens): UseSuspenseQueryOptions<CurrentUser> => ({
  queryKey: ['user', 'profile'],
  queryFn: () => GET<CurrentUser>(`/api/v1/profile`, tokens, createInit(tokens.accessToken)),
});

export function useCurrentUserProfileQuery() {
  return useSuspenseQuery(currentUserProfileQueryOptions(getClientSideTokens()));
}
