import { setCookie } from 'cookies-next';
import { createInit } from './utils';

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

const BASE_URL = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/auth`;

const AuthURLs = {
  refreshAuth: BASE_URL + '/refresh ',
};

/**
 * @description fetches a new set of tokens from the server with refresh token
 */
export async function refreshAuth(tokens: Tokens) {
  const response = await fetch(AuthURLs.refreshAuth, {
    method: 'POST',
    ...createInit(tokens.refreshToken),
  });

  if (!response.ok) {
    throw new Error('Unknown error occurred when handling tokens.');
  }
  const { accessToken, refreshToken } = await response.json();
  setCookie('accessToken', accessToken);
  setCookie('refreshToken', refreshToken);
  return { accessToken, refreshToken };
}
