import type { Metadata } from 'next';
import { wantedSansStd } from './fonts';
import './globals.css';
import '@bottlesteam/ui/styles';

export const metadata: Metadata = {
  title: 'Bottle',
  description: '당신의 연애 상담을 위한, 보틀',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={wantedSansStd.className}>{children}</body>
    </html>
  );
}
