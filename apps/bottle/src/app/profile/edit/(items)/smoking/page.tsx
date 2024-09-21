'use client';

import { Smoking } from '@/components/profile/smoking';
import { useProfileEditPage } from '@/hooks/useProfileEditPage';

export default function SmokingEditPage() {
  const { goBack, profile, edit, kakaoId } = useProfileEditPage();

  return (
    <Smoking
      initialValue={profile.smoking}
      onNext={smoking => {
        if (smoking === profile.smoking) {
          goBack();
          return;
        }
        edit({ ...profile, kakaoId, smoking });
      }}
    />
  );
}
