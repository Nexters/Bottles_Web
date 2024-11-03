'use client';

import { Header } from '@bottlesteam/ui';
import { useRouter } from 'next/navigation';

export function HeaderArea() {
  const router = useRouter();

  return (
    <Header
      onGoBack={() => {
        router.back();
      }}
    />
  );
}
