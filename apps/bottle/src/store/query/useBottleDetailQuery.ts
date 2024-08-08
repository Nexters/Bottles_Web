import { GET, createInit } from '@/features/server';
import { Bottle } from '@/models/bottle';
import { UseSuspenseQueryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';

export const bottleDetailQueryOptions = (accessToken: string, id: Bottle['id']): UseSuspenseQueryOptions<Bottle> => ({
  queryKey: ['bottle', id],
  queryFn: () =>
    GET<Bottle>(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/bottles/${id}`, createInit(accessToken)),
});
export function useBottleDetailQuery(id: Bottle['id']) {
  return useSuspenseQuery(bottleDetailQueryOptions(getCookie('accessToken') ?? '', id));
}
