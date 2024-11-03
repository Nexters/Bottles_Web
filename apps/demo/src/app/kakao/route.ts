import { getTokenFromKakako, login } from './utils';

const isDev = process.env.NEXT_PUBLIC_MODE === 'DEVELOPMENT';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code') ?? '';

  const accessToken = await getTokenFromKakako(code);

  const loginData = await login(accessToken);

  console.log('loginData', accessToken, loginData);

  const headers = new Headers();
  headers.append('Set-Cookie', `accessToken=${loginData.accessToken}`);
  headers.append('Set-Cookie', `refreshToken=${loginData.refreshToken}`);
  headers.set('Location', isDev ? 'http://localhost:3000/bottles' : 'https://demo.bottles.asia/bottles');

  return new Response(null, {
    status: 303,
    headers,
  });
}
