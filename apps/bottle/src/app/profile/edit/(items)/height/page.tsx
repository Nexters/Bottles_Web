'use client';

import { Height } from '@/components/profile/height';
import { useProfileMutation } from '@/store/mutation/useProfileMuatation';
import { useCurrentUserProfileQuery } from '@/store/query/useCurrentUserProfileQuery';
import { useRouter } from 'next/navigation';

export default function HeightEditPage() {
  const router = useRouter();

  const {
    data: { kakaoId, profileSelect },
  } = useCurrentUserProfileQuery();
  const { mutate } = useProfileMutation({ type: 'edit' });

  return (
    <Height
      initialValue={profileSelect.height}
      onNext={height => {
        if (height === profileSelect.height) {
          router.back();
          return;
        }
        mutate({ ...profileSelect, kakaoId, height });
      }}
    />
  );
}
