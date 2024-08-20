import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createInit, GET } from './features/server';
import { getServerSideTokens } from './features/server/serverSideTokens';
import { GetUserInfoData, SignInUpState } from './store/query/useNameQuery';

export async function middleware(request: NextRequest) {
  const url = new URL(request.url);
  if (String(url).includes('accessToken')) {
    const accessToken = url.searchParams.get('accessToken') ?? '';
    const refreshToken = url.searchParams.get('refreshToken') ?? '';

    const cleanUrl = new URL(url);
    cleanUrl.searchParams.delete('accessToken');
    cleanUrl.searchParams.delete('refreshToken');
    const response = NextResponse.redirect(cleanUrl.toString());

    if (accessToken != null && refreshToken != null) {
      response.cookies.set('accessToken', accessToken, { httpOnly: false });
      response.cookies.set('refreshToken', refreshToken, { httpOnly: false });
    }

    return response;
  }

  if (String(url).includes('create-profile') && !String(url).includes('create-profile/bottle')) {
    const tokens = getServerSideTokens();

    try {
      const userInfo = await GET<GetUserInfoData>(`/api/v1/profile/info`, tokens, createInit(tokens.accessToken));

      console.log('[signInUp]', userInfo);

      if (userInfo.signInUpStep === SignInUpState.SIGN_UP_APPLE_LOGIN_FINISHED) {
        const response = NextResponse.redirect(`${String(url)}/bottle`);
        return response;
      }
    } catch (error) {
      const response = NextResponse.next();
      return response;
    }
  }
  const response = NextResponse.next();
  return response;
}

export const config = {
  matcher: ['/bottles/:path*', '/my', '/create-profile/:path*'],
};
