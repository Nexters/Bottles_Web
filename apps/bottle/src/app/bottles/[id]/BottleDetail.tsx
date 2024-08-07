'use client';

import { useBottleDetailQuery } from '@/features/query/useBottleDetailQuery';

interface Props {
  id: number;
}

export function BottleDetail({ id }: Props) {
  const { data } = useBottleDetailQuery(id);

  console.log('detail', data);

  return <div></div>;
}
