'use client';

import { UserInformation } from '@/components/user-information';
import { useMyInformationQuery } from '@/store/query/useMyInformation';

export function MyInformation() {
  const { data } = useMyInformationQuery();

  return (
    <UserInformation>
      <UserInformation.BasicInformationArea imageUrl={data.imageUrl} userName={data.userName} age={data.age} />
      <UserInformation.IntroductionCard title="내가 쓴 편지" introduction={data.introduction} />
      <UserInformation.SelectedProfile profile={data.profileSelect} />
    </UserInformation>
  );
}
