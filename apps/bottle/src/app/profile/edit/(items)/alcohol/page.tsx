'use client';

import { Alcohol } from '@/components/profile/alcohol';
import { useProfileMutation } from '@/store/mutation/useProfileMuatation';
import { useCurrentUserProfileQuery } from '@/store/query/useCurrentUserProfileQuery';
import { useRouter } from 'next/navigation';

export default function AlcoholEditPage() {
  const router = useRouter();

  const {
    data: { kakaoId, profileSelect },
  } = useCurrentUserProfileQuery();
  const { mutate } = useProfileMutation({ type: 'edit' });

  return (
    <Alcohol
      initialValue={profileSelect.alcohol}
      onNext={alcohol => {
        if (alcohol === profileSelect.alcohol) {
          router.back();
          return;
        }
        mutate({ ...profileSelect, kakaoId, alcohol });
      }}
    />
  );
}
