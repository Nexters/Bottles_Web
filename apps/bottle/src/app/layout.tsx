import { AuthProvider } from '@/features/auth/AuthProvider';
import { QueryClientProvider } from '@/features/query/QueryClientProvider';
import { UserAgentProvider } from '@/features/web-view/UserAgentProvider';
import { getCookie } from 'cookies-next';
import type { Metadata } from 'next';
import './globals.css';
import '@bottlesteam/ui/styles';
import { cookies } from 'next/headers';
import { wantedSansStd } from '../fonts';
import { layoutStyle } from './layout.css';

export const metadata: Metadata = {
  title: '보틀',
  description: '천생연분을 찾으세요',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const store = cookies();

  const accessToken = store.get('accessToken')?.value;
  const refreshToken = store.get('refreshToken')?.value;

  const tokens = accessToken != null && refreshToken != null ? { accessToken, refreshToken } : undefined;

  return (
    <html lang="en">
      <body className={wantedSansStd.className}>
        <main className={layoutStyle}>
          <AuthProvider tokens={tokens}>
            <QueryClientProvider>
              <UserAgentProvider>{children}</UserAgentProvider>
            </QueryClientProvider>
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
