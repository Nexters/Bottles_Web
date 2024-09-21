'use client';

import { Alcohol } from '@/components/profile/alcohol';
import { useProfileEditPage } from '@/hooks/useProfileEditPage';

export default function AlcoholEditPage() {
  const { goBack, profile, edit, kakaoId } = useProfileEditPage();

  return (
    <Alcohol
      initialValue={profile.alcohol}
      onNext={alcohol => {
        if (alcohol === profile.alcohol) {
          goBack();
          return;
        }
        edit({ ...profile, kakaoId, alcohol });
      }}
    />
  );
}
