import { getServerSideTokens } from '@/features/server/serverSideTokens';
import { ServerFetchBoundary } from '@/store/query/ServerFetchBoundary';
import { currentUserProfileQueryOptions } from '@/store/query/useCurrentUserProfileQuery';
import { Suspense } from 'react';
import { BasicInformation } from './BasicInformation';
import { HeaderArea } from './HeaderArea';
import { IntroductionArea } from './IntroductionArea';
import { ProfileArea } from './ProfileArea';
import { contentsContainerStyle } from './profileEditStyle.css';

export default function ProfileEditPage() {
  const prefetchOptions = currentUserProfileQueryOptions(getServerSideTokens());

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
