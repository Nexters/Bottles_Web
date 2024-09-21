'use client';

import { KakaoId } from '@/components/profile/kakao-id';
import { useProfileEditPage } from '@/hooks/useProfileEditPage';

export default function KakaoIdEditPage() {
  const { goBack, profile, edit, kakaoId: initialKakaoId } = useProfileEditPage();

  return (
    <KakaoId
      initialValue={initialKakaoId}
      onNext={kakaoId => {
        if (kakaoId === initialKakaoId) {
          goBack();
          return;
        }
        edit({ ...profile, kakaoId });
      }}
    />
  );
}
