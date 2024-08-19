import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  if (String(url).includes('accessToken')) {
    const accessToken = url.searchParams.get('accessToken');
    const refreshToken = url.searchParams.get('refreshToken');

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
}

export const config = {
  matcher: ['/bottles/:path*', '/my', '/create-profile/:path*'],
};
