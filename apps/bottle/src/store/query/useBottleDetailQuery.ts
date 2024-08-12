import { GET, createInit } from '@/features/server';
import { Tokens } from '@/features/server/auth';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { Bottle } from '@/models/bottle';
import { UseSuspenseQueryOptions, useSuspenseQuery } from '@tanstack/react-query';

export const bottleDetailQueryOptions = (tokens: Tokens, id: Bottle['id']): UseSuspenseQueryOptions<Bottle> => ({
  queryKey: ['bottle', id],
  queryFn: () => GET<Bottle>(`/api/v1/bottles/${id}`, tokens, createInit(tokens.accessToken)),
});
export function useBottleDetailQuery(id: Bottle['id']) {
  return useSuspenseQuery(bottleDetailQueryOptions(getClientSideTokens(), id));
}
