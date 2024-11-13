import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { AB_TEST_SEARCH_KEY } from './app/bottles/sents/Sents';
import { GET, createInit } from './features/server';
import { CurrentUser } from './models/user';

export async function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const cleanUrl = new URL(url);

  let accessToken;
  let refreshToken;
  let device;
  let version;

  if (String(url).includes('accessToken') && String(url).includes('refreshToken')) {
    accessToken = url.searchParams.get('accessToken') ?? '';
    refreshToken = url.searchParams.get('refreshToken') ?? '';
    cleanUrl.searchParams.delete('accessToken');
    cleanUrl.searchParams.delete('refreshToken');
  }

  if (String(url).includes('device') && String(url).includes('version')) {
    device = url.searchParams.get('device')!;
    version = url.searchParams.get('version')!;
    cleanUrl.searchParams.delete('device');
    cleanUrl.searchParams.delete('version');
  }

  if (url.pathname.includes('/bottles/sents') && url.searchParams.get(AB_TEST_SEARCH_KEY) == null) {
    try {
      const userInfo = await GET<CurrentUser>(
        `/api/v1/profile`,
        { accessToken: accessToken ?? '', refreshToken: refreshToken ?? '' },
        createInit(accessToken)
      );
      if (userInfo.introduction[0]?.answer.length ?? 2 % 2 === 0) {
        cleanUrl.searchParams.set(AB_TEST_SEARCH_KEY, 'B');
      } else {
        cleanUrl.searchParams.set(AB_TEST_SEARCH_KEY, 'A');
      }
    } catch (error) {
      console.log('NO TOKENS', error);
    }
  }

  if (url.toString() !== cleanUrl.toString()) {
    const response = NextResponse.redirect(cleanUrl.toString());
    if (accessToken != null && refreshToken != null) {
      response.cookies.set('accessToken', accessToken, { httpOnly: false });
      response.cookies.set('refreshToken', refreshToken, { httpOnly: false });
    }
    if (device != null && version != null) {
      response.cookies.set('device', device, { httpOnly: false });
      response.cookies.set('version', version, { httpOnly: false });
    }

    return response;
  }

  const response = NextResponse.next();

  return response;
}

export const config = {
  matcher: [
    '/bottles/:path*',
    '/bottle/:path*',
    '/my',
    '/intro/:path*',
    '/create-profile/:path*',
    '/profile/create/:path*',
    '/profile/edit/:path*',
    '/admin/:path*',
  ],
};
