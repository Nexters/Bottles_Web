'use client';

import { Keywords } from '@/components/profile/keywords';
import { useProfileEditPage } from '@/hooks/useProfileEditPage';
import { isSameArray } from '@/utils';

export default function KeywordsEditPage() {
  const { goBack, profile, edit, kakaoId } = useProfileEditPage();

  return (
    <Keywords
      initialValue={profile.keyword}
      onNext={keyword => {
        if (isSameArray(keyword, profile.keyword)) {
          goBack();
          return;
        }
        edit({ ...profile, kakaoId, keyword });
      }}
    />
  );
}
