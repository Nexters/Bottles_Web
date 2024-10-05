import { getServerSideTokens } from '@/features/server/serverSideTokens';
import { Suspense } from 'react';
import { ServerFetchBoundary } from '../../../store/query/ServerFetchBoundary';
import { bottleDetailQueryOptions } from '../../../store/query/useBottleDetailQuery';
import { ActionButtons } from './ActionButtons';
import { BottleDetail } from './BottleDetail';
import { BottlePageHeader } from './BottlePageHeader';

export type BottleType = 'sent' | 'recommendation';

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
        <ServerFetchBoundary fetchOptions={prefetchOptions}>
          <BottleDetail id={id} />
        </ServerFetchBoundary>
        <ActionButtons type={type} id={id} />
      </Suspense>
    </>
  );
}
