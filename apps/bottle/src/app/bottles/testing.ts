'use server';

import { PrefetchOptions } from '@/features/query/PrefetchBoundary';
import { GetBottlesData, bottlesQueryOptions } from '@/features/query/useBottlesQuery';
// import { userInfoQueryOptions } from '@/features/query/useNameQuery';
import { GET, createInit } from '@/features/server';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';

const accessToken = getCookie('accessToken', { cookies }) ?? '';

const userInfoQueryOptions = (accessToken: string) => ({
  queryKey: ['bottles'],
  queryFn: async () => {
    await new Promise(res => {
      setTimeout(() => {
        res('s');
      }, 3000);
    });

    const res = GET<GetBottlesData>(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/bottles`,
      createInit(accessToken)
    );
    return res;
  },
});

export const getPrefetchOptions = (): PrefetchOptions[] => {
  return [userInfoQueryOptions(accessToken), bottlesQueryOptions(accessToken)];
};
