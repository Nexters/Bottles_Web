import { createInit } from './utils';

const BASE_URL = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/auth`;

const AuthURLs = {
  refreshAuth: BASE_URL + '/refresh ',
};

/**
 * @description
 * fetches a new set of tokens from the server with refresh token
 */
export async function refreshAuth() {
  // TODO: Inject localStorage dependency in some other way.
  const response = await fetch(AuthURLs.refreshAuth, {
    method: 'POST',
    ...createInit(localStorage.getItem('refreshToken') ?? ''),
  });
  console.log('2.1 @@@refreshResult:', response);
  if (!response.ok) {
    throw new Error('Unknown error occurred when handling tokens.');
  }
  console.log('2.2 @@@@@refreshedToken');
  const { accessToken, refreshToken } = await response.json();
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
  console.log('2.3 @@@@new tokens', accessToken, refreshToken);
  return;
}

/**
 * 1. POST를 포함한 요청 전송
 * 2. POST 내부에서 fetchWithTokenHandler 요청
 * 3. 401 status를 갖고 refreshAuth 요청
 * 4. refreshAuth에서 토큰 재발급 받아 로컬 스토리지에 저장
 * 5. 다시 원래 호출하던 fetch 요청 진행
 */
