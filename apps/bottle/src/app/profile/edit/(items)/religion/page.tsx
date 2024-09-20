'use client';

import { Religion } from '@/components/profile/religion';
import { useProfileMutation } from '@/store/mutation/useProfileMuatation';
import { useCurrentUserProfileQuery } from '@/store/query/useCurrentUserProfileQuery';
import { useRouter } from 'next/navigation';

export default function ReligionEditPage() {
  const router = useRouter();

  const {
    data: { kakaoId, profileSelect },
  } = useCurrentUserProfileQuery();
  const { mutate } = useProfileMutation({ type: 'edit' });

  return (
    <Religion
      initialValue={profileSelect.religion}
      onNext={religion => {
        if (religion === profileSelect.religion) {
          router.back();
          return;
        }
        mutate({ ...profileSelect, kakaoId, religion });
      }}
    />
  );
}
