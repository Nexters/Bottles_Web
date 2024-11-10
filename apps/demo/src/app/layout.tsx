import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { wantedSansStd } from '../fonts';
import { layoutStyle } from './layout.css';
import '@bottlesteam/ui/styles';

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
        <main className={layoutStyle}>{children}</main>
      </body>
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_DEMO_GOOGLE_ANALYSTICS_ID}`} />
      <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_DEMO_GOOGLE_TAG_MANAGER_ID}`} />
    </html>
  );
}
