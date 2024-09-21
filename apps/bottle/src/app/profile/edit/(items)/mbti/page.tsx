'use client';

import { MBTI } from '@/components/profile/MBTI';
import { useProfileEditPage } from '@/hooks/useProfileEditPage';

export default function MBTIEditPage() {
  const { goBack, profile, edit, kakaoId } = useProfileEditPage();
  return (
    <MBTI
      initialValue={profile?.mbti}
      onNext={mbti => {
        if (profile.mbti === mbti) {
          goBack();
          return;
        }
        edit({ ...profile, kakaoId, mbti });
      }}
    />
  );
}
