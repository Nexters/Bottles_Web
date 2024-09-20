'use client';

import { Smoking } from '@/components/profile/smoking';
import { useProfileMutation } from '@/store/mutation/useProfileMuatation';
import { useCurrentUserProfileQuery } from '@/store/query/useCurrentUserProfileQuery';
import { useRouter } from 'next/navigation';

export default function SmokingEditPage() {
  const router = useRouter();

  const {
    data: { kakaoId, profileSelect },
  } = useCurrentUserProfileQuery();
  const { mutate } = useProfileMutation({ type: 'edit' });

  return (
    <Smoking
      initialValue={profileSelect.smoking}
      onNext={smoking => {
        if (smoking === profileSelect.smoking) {
          router.back();
          return;
        }
        mutate({ ...profileSelect, kakaoId, smoking });
      }}
    />
  );
}
