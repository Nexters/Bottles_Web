import { AppBridgeProvider } from '@/features/app-bridge/AppBridgeProvider';
import { UserAgentProvider } from '@/features/user-agent/UserAgentProvider';
import { QueryClientProvider } from '@/store/query/QueryClientProvider';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { getCookie } from 'cookies-next';
import type { Metadata } from 'next';
import './globals.css';
import '@bottlesteam/ui/styles';
import type { Viewport } from 'next';
import { cookies } from 'next/headers';
import { wantedSansStd } from '../fonts';
import { layoutStyle } from './layout.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
};
export const metadata: Metadata = {
  title: '보틀',
  description: '천생연분을 찾으세요',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={wantedSansStd.className}>
        <main className={layoutStyle({ notch: getCookie('version', { cookies }) != null })}>
          <QueryClientProvider>
            <UserAgentProvider>
              <AppBridgeProvider>{children}</AppBridgeProvider>
            </UserAgentProvider>
          </QueryClientProvider>
        </main>
        <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_BOTTLE_GOOGLE_ANALYSTICS_ID}`} />
        <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_BOTTLE_GOOGLE_TAG_MANAGER_ID}`} />
      </body>
    </html>
  );
}
