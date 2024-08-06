import { UseSuspenseQueryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';
import { GET, createInit } from '../server';

interface GetUserInfoData {
  name: string;
}

export const userInfoQueryOptions = (accessToken: string): UseSuspenseQueryOptions<GetUserInfoData> => ({
  queryKey: ['userInfo'],
  queryFn: () =>
    GET<GetUserInfoData>(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/profile/info`, createInit(accessToken)),
});
export function useUserInfoQuery() {
  return useSuspenseQuery(userInfoQueryOptions(getCookie('accessToken') ?? ''));
}
