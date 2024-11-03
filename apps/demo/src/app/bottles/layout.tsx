import { Layout, Header } from '@bottlesteam/ui';
import type { ReactNode } from 'react';

export default function BottlesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Layout hasCTAButton={false}>
        <Header />
        {children}
      </Layout>
    </>
  );
}
