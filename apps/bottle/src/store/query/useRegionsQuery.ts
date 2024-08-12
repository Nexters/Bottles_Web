import { Regions } from '@/app/create-profile/_steps/region';
import { GET } from '@/features/server';
import { Tokens } from '@/features/server/auth';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

export const regionsQueryOptions = (tokens: Tokens): UseQueryOptions<Regions> => ({
  queryKey: ['regions'],
  queryFn: async () => GET<Regions>(`/api/v1/profile/choice`, tokens, { cache: 'force-cache' }),
  staleTime: Infinity,
  gcTime: Infinity,
});
export function useRegionsQuery() {
  return useQuery(regionsQueryOptions(getClientSideTokens()));
}
