import { CreateProfileValues } from '@/app/create-profile/CreateProfileProvider';
import { UseSuspenseQueryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';
import { GET, createInit } from '../server';

export interface Bottle {
  age: number;
  expiredAt: string;
  id: number;
  keyword: CreateProfileValues['keyword'];
  mbti: CreateProfileValues['mbti'];
  userImageUrl: 'string';
  userName: 'string';
}

export interface GetBottlesData {
  randomBottles: Bottle[];
  sentBottles: Bottle[];
}

export const bottlesQueryOptions = (accessToken: string): UseSuspenseQueryOptions<GetBottlesData> => ({
  queryKey: ['bottles'],
  queryFn: async () =>
    GET<GetBottlesData>(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/bottles`, createInit(accessToken)),
});
export function useBottlesQuery() {
  return useSuspenseQuery(bottlesQueryOptions(getCookie('accessToken') ?? ''));
}
