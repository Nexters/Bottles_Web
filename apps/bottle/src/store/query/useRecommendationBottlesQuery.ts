import { createInit, GET } from '@/features/server';
import { Tokens } from '@/features/server/auth';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { OtherUser } from '@/models/user';
import { useSuspenseQuery, UseSuspenseQueryOptions } from '@tanstack/react-query';

export interface RecommendationBottlePreview
  extends Pick<OtherUser, 'age' | 'userImageUrl' | 'userName'>,
    Pick<OtherUser['profileSelect'], 'keyword' | 'mbti'> {
  userId: number;
  expiredAt: string; // Date
  id: number;
  lastActivatedAt: string;
  likeEmoji: string;
}

interface RandomBottlesQuery {
  nextBottleLeftHours: number;
  randomBottles: RecommendationBottlePreview[];
}

export const recommendationBottlesQueryOptions = (tokens: Tokens): UseSuspenseQueryOptions<RandomBottlesQuery> => ({
  queryKey: ['bottles', 'random'],
  queryFn: () => GET<RandomBottlesQuery>(`/api/v2/bottles/random`, tokens, createInit(tokens.accessToken)),
});

export function useRecommendationBottlesQuery() {
  return useSuspenseQuery(recommendationBottlesQueryOptions(getClientSideTokens()));
}
