'use client';

import { Height } from '@/components/profile/height';
import { useProfileEditPage } from '@/hooks/useProfileEditPage';

export default function HeightEditPage() {
  const { goBack, profile, edit, kakaoId } = useProfileEditPage();

  return (
    <Height
      initialValue={profile.height}
      onNext={height => {
        if (height === profile.height) {
          goBack();
          return;
        }
        edit({ ...profile, kakaoId, height });
      }}
    />
  );
}
