'use client';

import { Header } from '@/components/common/header';
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
