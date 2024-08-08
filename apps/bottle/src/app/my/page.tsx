import { Header } from '@/components/header';
import { PrefetchBoundary } from '@/store/query/PrefetchBoundary';
import { myInformationQueryOptions } from '@/store/query/useMyInformation';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { MyInformation } from './MyInformation';
import { ActionButtons } from './_components/ActionButtons';

export default async function MyPage() {
  const accessToken = getCookie('accessToken', { cookies }) ?? '';
  const prefetchOptions = myInformationQueryOptions(accessToken);

  return (
    <>
      <Header />
      <Suspense>
        <PrefetchBoundary prefetchOptions={prefetchOptions}>
          <MyInformation />
        </PrefetchBoundary>
        <ActionButtons />
      </Suspense>
    </>
  );
}
