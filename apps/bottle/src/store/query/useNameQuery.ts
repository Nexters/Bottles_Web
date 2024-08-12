import { GET, createInit } from '@/features/server';
import { Tokens } from '@/features/server/auth';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { UseSuspenseQueryOptions, useSuspenseQuery } from '@tanstack/react-query';

interface GetUserInfoData {
  name: string;
}

export const userInfoQueryOptions = (tokens: Tokens): UseSuspenseQueryOptions<GetUserInfoData> => ({
  queryKey: ['userInfo'],
  queryFn: () => GET<GetUserInfoData>(`/api/v1/profile/info`, tokens, createInit(tokens.accessToken)),
});
export function useUserInfoQuery() {
  return useSuspenseQuery(userInfoQueryOptions(getClientSideTokens()));
}
