import { GET, createInit } from '@/features/server';
import { CurrentUser } from '@/models/user';
import { UseSuspenseQueryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';

export const myInformationQueryOptions = (accessToken: string): UseSuspenseQueryOptions<CurrentUser> => ({
  queryKey: ['bottles'],
  queryFn: () => GET<CurrentUser>(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/profile`, createInit(accessToken)),
});
export function useMyInformationQuery() {
  return useSuspenseQuery(myInformationQueryOptions(getCookie('accessToken') ?? ''));
}
