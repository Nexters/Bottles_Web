'use client';

import { Header } from '@/components/common/header';
import { Asset } from '@bottlesteam/ui';
import { useRouter } from 'next/navigation';

export function BottlePageHeader() {
  const router = useRouter();
  return (
    <Header>
      <button onClick={() => router.back()} style={{ border: 'none', background: 'none' }}>
        <Asset type="icon-arrow-left" />
      </button>
    </Header>
  );
}
