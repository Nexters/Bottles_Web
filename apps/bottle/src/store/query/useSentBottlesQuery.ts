import { createInit, GET } from '@/features/server';
import { Tokens } from '@/features/server/auth';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { SentBottlePreview } from '@/models/bottle';
import { useSuspenseQuery, UseSuspenseQueryOptions } from '@tanstack/react-query';

interface SentBottlesQuery {
  sentBottles: SentBottlePreview[];
}

export const sentBottlesQueryOptions = (tokens: Tokens): UseSuspenseQueryOptions<SentBottlesQuery> => ({
  queryKey: ['bottles', 'sent'],
  queryFn: () => GET<SentBottlesQuery>(`/api/v2/bottles/sent`, tokens, createInit(tokens.accessToken)),
  // NOTE: should ALWAYS be stale
  staleTime: 0,
});

export function useSentBottlesQuery() {
  return useSuspenseQuery(sentBottlesQueryOptions(getClientSideTokens()));
}
