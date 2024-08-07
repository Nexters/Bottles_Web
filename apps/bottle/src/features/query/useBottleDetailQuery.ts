import { BottleDetail } from '@/models/bottle';
import { UseSuspenseQueryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';
import { GET, createInit } from '../server';

export const bottleDetailQueryOptions = (
  accessToken: string,
  id: BottleDetail['id']
): UseSuspenseQueryOptions<BottleDetail> => ({
  queryKey: ['bottle', id],
  queryFn: async () =>
    GET<BottleDetail>(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/bottles/${id}`, createInit(accessToken)),
});
export function useBottleDetailQuery(id: BottleDetail['id']) {
  return useSuspenseQuery(bottleDetailQueryOptions(getCookie('accessToken') ?? '', id));
}
