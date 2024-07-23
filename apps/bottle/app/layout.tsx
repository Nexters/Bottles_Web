import type { Metadata } from 'next';
import './globals.css';
import '@bottlesteam/ui/styles';
import { wantedSansStd } from './fonts';

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
      <body className={wantedSansStd.className}>{children}</body>
    </html>
  );
}
