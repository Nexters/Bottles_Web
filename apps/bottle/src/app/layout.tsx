import { UserAgentProvider } from '@/features/web-view/UserAgentProvider';
import { QueryClientProvider } from '@/store/query/QueryClientProvider';
import type { Metadata } from 'next';
import './globals.css';
import '@bottlesteam/ui/styles';
import { wantedSansStd } from '../fonts';
import { layoutStyle } from './layout.css';
import type { Viewport } from 'next';

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
        <main className={layoutStyle}>
          <QueryClientProvider>
            <UserAgentProvider>{children}</UserAgentProvider>
          </QueryClientProvider>
        </main>
      </body>
    </html>
  );
}
