import { createInit, GET } from '@/features/server';
import { Tokens } from '@/features/server/auth';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { RecommendationBottlePreview } from '@/models/bottle';
import { useSuspenseQuery, UseSuspenseQueryOptions } from '@tanstack/react-query';

interface RandomBottlesQuery {
  nextBottleLeftHours: number;
  randomBottles: RecommendationBottlePreview[];
}

export const recommendationBottlesQueryOptions = (tokens: Tokens): UseSuspenseQueryOptions<RandomBottlesQuery> => ({
  queryKey: ['bottles', 'recommendation'],
  // NOTE: should ALWAYS be stale
  queryFn: () => GET<RandomBottlesQuery>(`/api/v2/bottles/random`, tokens, createInit(tokens.accessToken)),
});

export function useRecommendationBottlesQuery() {
  return useSuspenseQuery(recommendationBottlesQueryOptions(getClientSideTokens()));
}
