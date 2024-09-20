'use client';

import { MBTI } from '@/components/profile/MBTI';
import { useProfileMutation } from '@/store/mutation/useProfileMuatation';
import { useCurrentUserProfileQuery } from '@/store/query/useCurrentUserProfileQuery';
import { useRouter } from 'next/navigation';

export default function MBTIEditPage() {
  const router = useRouter();
  const {
    data: { profileSelect, kakaoId },
  } = useCurrentUserProfileQuery();
  const { mutate } = useProfileMutation({ type: 'edit' });

  return (
    <MBTI
      initialValue={profileSelect?.mbti}
      onNext={mbti => {
        if (profileSelect.mbti === mbti) {
          router.back();
          return;
        }
        mutate({ ...profileSelect, kakaoId, mbti });
      }}
    />
  );
}
