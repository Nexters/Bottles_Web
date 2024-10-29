'use client';

import { Profile } from '@/components/common/profile';
import { useCurrentUserProfileQuery } from '@/store/query/useCurrentUserProfileQuery';
import { spacings } from '@bottlesteam/ui';
import { useRouter } from 'next/navigation';

export function BasicInformation() {
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
      onEditClick={() => {
        router.push('/profile/edit/images');
      }}
    />
  );
}
