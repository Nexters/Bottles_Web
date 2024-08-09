import { getServerSideTokens } from '@/features/server/serverSideTokens';
import { Suspense } from 'react';
import { PrefetchBoundary } from '../../../store/query/PrefetchBoundary';
import { bottleDetailQueryOptions } from '../../../store/query/useBottleDetailQuery';
import { BottleType } from '../Bottles';
import { ActionButtons } from './ActionButtons';
import { BottleDetail } from './BottleDetail';
import { BottlePageHeader } from './BottlePageHeader';

interface Props {
  params: { slug: [BottleType, number] };
}

export default function BottleItemPage({
  params: {
    slug: [type, id],
  },
}: Props) {
  const prefetchOptions = bottleDetailQueryOptions(getServerSideTokens(), id);

  return (
    <>
      <BottlePageHeader />
      <Suspense>
        <PrefetchBoundary prefetchOptions={prefetchOptions}>
          <BottleDetail id={id} />
        </PrefetchBoundary>
        <ActionButtons type={type} id={id} />
      </Suspense>
    </>
  );
}
