'use client';

import { KakaoId } from '@/components/profile/kakao-id';
import { useProfileMutation } from '@/store/mutation/useProfileMuatation';
import { useCurrentUserProfileQuery } from '@/store/query/useCurrentUserProfileQuery';
import { useRouter } from 'next/navigation';

export default function KakaoIdEditPage() {
  const router = useRouter();
  const {
    data: { kakaoId: initialKakaoId, profileSelect },
  } = useCurrentUserProfileQuery();
  const { mutate } = useProfileMutation({ type: 'edit' });

  return (
    <KakaoId
      initialValue={initialKakaoId}
      onNext={kakaoId => {
        if (kakaoId === initialKakaoId) {
          router.back();
          return;
        }
        mutate({ ...profileSelect, kakaoId });
      }}
    />
  );
}
