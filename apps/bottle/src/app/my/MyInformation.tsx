'use client';

import { UserInformation } from '@/components/user-information';
import { useMyInformationQuery } from '@/store/query/useMyInformation';

export function MyInformation() {
  const { data } = useMyInformationQuery();

  console.log('my information', data);

  return (
    <UserInformation>
      <UserInformation.BasicInformationArea imageUrl={data.imageUrl} userName={data.userName} age={data.age} />
      {data.introduction.length > 0 && (
        <UserInformation.IntroductionCard title="내가 쓴 편지" introduction={data.introduction} />
      )}
      {data.profileSelect != null && <UserInformation.SelectedProfile profile={data.profileSelect} />}
    </UserInformation>
  );
}
