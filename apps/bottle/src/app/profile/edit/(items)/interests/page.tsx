'use client';

import { Interests } from '@/components/profile/interests';
import { useProfileEditPage } from '@/hooks/useProfileEditPage';
import { Profile } from '@/models/profile';
import { isSameArray } from '@/utils';

function isSameInterests(interest1: Profile['interest'], interest2: Profile['interest']) {
  return (
    isSameArray(interest1.culture, interest2.culture) &&
    isSameArray(interest1.entertainment, interest2.entertainment) &&
    isSameArray(interest1.etc, interest2.etc) &&
    isSameArray(interest1.sports, interest2.sports)
  );
}

export default function InterestsEditPage() {
  const { goBack, profile, edit, kakaoId } = useProfileEditPage();

  return (
    <Interests
      initialValue={profile.interest}
      onNext={interest => {
        if (isSameInterests(profile.interest, interest)) {
          goBack();
          return;
        }
        edit({ ...profile, interest, kakaoId });
      }}
    />
  );
}
