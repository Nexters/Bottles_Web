import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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
    '/create-profile/:path*',
    '/profile/create/:path*',
    '/profile/edit/:path*',
    '/admin/:path*',
  ],
};
