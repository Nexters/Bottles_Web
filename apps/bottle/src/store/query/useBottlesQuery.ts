import { GET, createInit } from '@/features/server';
import { Tokens } from '@/features/server/auth';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { PreviewBottle } from '@/models/bottle';
import { UseSuspenseQueryOptions, useSuspenseQuery } from '@tanstack/react-query';

export interface GetBottlesData {
  randomBottles: PreviewBottle[];
  sentBottles: PreviewBottle[];
}

export const bottlesQueryOptions = (tokens: Tokens): UseSuspenseQueryOptions<GetBottlesData> => ({
  queryKey: ['bottles'],
  queryFn: async () => GET<GetBottlesData>(`/api/v1/bottles`, tokens, createInit(tokens.accessToken)),
});
export function useBottlesQuery() {
  return useSuspenseQuery(bottlesQueryOptions(getClientSideTokens()));
}
