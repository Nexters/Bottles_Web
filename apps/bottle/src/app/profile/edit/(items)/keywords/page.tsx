'use client';

import { Keywords } from '@/components/profile/keywords';
import { useProfileMutation } from '@/store/mutation/useProfileMuatation';
import { useCurrentUserProfileQuery } from '@/store/query/useCurrentUserProfileQuery';
import { isSameArray } from '@/utils';
import { useRouter } from 'next/navigation';

export default function KeywordsEditPage() {
  const router = useRouter();

  const {
    data: { kakaoId, profileSelect },
  } = useCurrentUserProfileQuery();
  const { mutate } = useProfileMutation({ type: 'edit' });

  return (
    <Keywords
      initialValue={profileSelect.keyword}
      onNext={keyword => {
        if (isSameArray(keyword, profileSelect.keyword)) {
          router.back();
          return;
        }
        mutate({ ...profileSelect, kakaoId, keyword });
      }}
    />
  );
}
