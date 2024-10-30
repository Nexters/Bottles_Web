'use client';

import { Profile } from '@/components/common/profile';
import { useUserAgent } from '@/features/user-agent/UserAgentProvider';
import { useCurrentUserProfileQuery } from '@/store/query/useCurrentUserProfileQuery';
import { spacings } from '@bottlesteam/ui';
import { useRouter } from 'next/navigation';

export function BasicInformation() {
  const { isAndroid, isMobile } = useUserAgent();
  const {
    data: { imageUrl, age, userName },
  } = useCurrentUserProfileQuery();
  const router = useRouter();

  return (
    <Profile
      image={imageUrl}
      name={userName}
      age={age}
      style={{ marginTop: spacings.xxl }}
      onEditClick={
        // TOOD: support Android when feature is ready on native app
        isAndroid && isMobile
          ? undefined
          : () => {
              router.push('/profile/edit/images');
            }
      }
    />
  );
}
