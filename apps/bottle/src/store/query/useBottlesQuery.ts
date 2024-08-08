import { GET, createInit } from '@/features/server';
import { PreviewBottle } from '@/models/bottle';
import { UseSuspenseQueryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';

export interface GetBottlesData {
  randomBottles: PreviewBottle[];
  sentBottles: PreviewBottle[];
}

export const bottlesQueryOptions = (accessToken?: string): UseSuspenseQueryOptions<GetBottlesData> => ({
  queryKey: ['bottles'],
  queryFn: async () =>
    GET<GetBottlesData>(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/bottles`, createInit(accessToken)),
});
export function useBottlesQuery() {
  return useSuspenseQuery(bottlesQueryOptions(getCookie('accessToken') ?? ''));
}
