import { getServerSideTokens } from '@/features/server/serverSideTokens';
import { ServerFetchBoundary } from '@/store/query/ServerFetchBoundary';
import { myInformationQueryOptions } from '@/store/query/useMyInformation';
import { Suspense } from 'react';
import { BasicInformation } from './BasicInformation';
import { HeaderArea } from './HeaderArea';
import { IntroductionArea } from './IntroductionArea';
import { ProfileArea } from './ProfileArea';
import { contentsContainerStyle } from './profileEditStyle.css';

export default function ProfileEditPage() {
  const prefetchOptions = myInformationQueryOptions(getServerSideTokens());

  return (
    <>
      <HeaderArea />
      <div className={contentsContainerStyle}>
        <Suspense>
          <ServerFetchBoundary fetchOptions={prefetchOptions}>
            <BasicInformation />
            <IntroductionArea />
            <ProfileArea />
          </ServerFetchBoundary>
        </Suspense>
      </div>
    </>
  );
}
