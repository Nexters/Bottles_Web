import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';

/**
 * @description can only be used on the server side
 */
export const getServerSideTokens = () => ({
  accessToken: getCookie('accessToken', { cookies }) ?? '',
  refreshToken: getCookie('refreshToken', { cookies }) ?? '',
});
