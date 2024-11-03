import { getCookie } from 'cookies-next';

export const getClientSideTokens = () => ({
  accessToken: getCookie('accessToken') ?? '',
  refreshToken: getCookie('refreshToken') ?? '',
});
