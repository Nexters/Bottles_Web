'use client';

import { ProfileSelect } from '@/models/profile';
import { SelectedProfile } from '../selected-profile';

interface Props {
  profile: ProfileSelect;
}

export function UserInformationSelectedProfile({ profile }: Props) {
  return (
    <SelectedProfile
      profile={profile}
      items={({ basicInformation, personalities, hobbies }) => (
        <>
          <SelectedProfile.Item type="기본 정보" values={basicInformation} />
          <SelectedProfile.Item type="나의 성격은" values={personalities} />
          <SelectedProfile.Item type="내가 푹 빠진 취미는" values={hobbies} />
        </>
      )}
    />
  );
}
