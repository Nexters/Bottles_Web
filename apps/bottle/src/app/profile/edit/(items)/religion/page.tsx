'use client';

import { Religion } from '@/components/profile/religion';
import { useProfileEditPage } from '@/hooks/useProfileEditPage';

export default function ReligionEditPage() {
  const { goBack, profile, edit, kakaoId } = useProfileEditPage();

  return (
    <Religion
      initialValue={profile.religion}
      onNext={religion => {
        if (religion === profile.religion) {
          goBack();
          return;
        }
        edit({ ...profile, kakaoId, religion });
      }}
    />
  );
}
