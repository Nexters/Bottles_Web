import { cookies } from 'next/headers';
import { Tokens } from './auth';

/**
 * @description can only be used on the server side
 */
export const getServerSideTokens = (): Tokens => {
  const cookieStore = cookies();

  return {
    accessToken: cookieStore.get('accessToken')?.value ?? '',
    refreshToken: cookieStore.get('refreshToken')?.value ?? '',
  };
};
