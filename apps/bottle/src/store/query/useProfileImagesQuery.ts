import { GET, createInit } from '@/features/server';
import { Tokens } from '@/features/server/auth';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { UserImages } from '@/models/user';
import { useSuspenseQuery } from '@tanstack/react-query';

export const profileImagesQueryOptions = (tokens: Tokens) => ({
  queryKey: ['user', 'profile', 'images'],
  queryFn: () => GET<UserImages>(`/api/v1/profile/images`, tokens, createInit(tokens.accessToken)),
});

export function useProfileImagesQuery() {
  return useSuspenseQuery(profileImagesQueryOptions(getClientSideTokens()));
}
