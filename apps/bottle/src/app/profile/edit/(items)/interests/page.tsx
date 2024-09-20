'use client';

import { Interests } from '@/components/profile/interests';
import { Profile } from '@/models/profile';
import { useProfileMutation } from '@/store/mutation/useProfileMuatation';
import { useCurrentUserProfileQuery } from '@/store/query/useCurrentUserProfileQuery';
import { isSameArray } from '@/utils';
import { useRouter } from 'next/navigation';

function isSameInterests(interest1: Profile['interest'], interest2: Profile['interest']) {
  return (
    isSameArray(interest1.culture, interest2.culture) &&
    isSameArray(interest1.entertainment, interest2.entertainment) &&
    isSameArray(interest1.etc, interest2.etc) &&
    isSameArray(interest1.sports, interest2.sports)
  );
}

export default function InterestsEditPage() {
  const router = useRouter();

  const {
    data: { kakaoId, profileSelect },
  } = useCurrentUserProfileQuery();
  const { mutate } = useProfileMutation({ type: 'edit' });

  return (
    <Interests
      initialValue={profileSelect.interest}
      onNext={interest => {
        if (isSameInterests(profileSelect.interest, interest)) {
          router.back();
          return;
        }
        mutate({ ...profileSelect, interest, kakaoId });
      }}
    />
  );
}
