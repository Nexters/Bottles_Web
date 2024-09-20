'use client';

import { Header } from '@/components/common/header';
import { UserInformation } from '@/components/common/user-information';
import { useCurrentUserProfileQuery } from '@/store/query/useCurrentUserProfileQuery';
import { ActionButtons } from './_components/ActionButtons';

export function MyInformation() {
  const { data } = useCurrentUserProfileQuery();

  console.log('my information', data);

  return (
    <UserInformation hasCTAButton={false}>
      <Header />
      <UserInformation.BasicInformationArea imageUrl={data.imageUrl} userName={data.userName} age={data.age} />
      {data.introduction.length > 0 && (
        <UserInformation.IntroductionCard title="내가 쓴 편지" introduction={data.introduction} />
      )}
      {data.profileSelect != null && <UserInformation.SelectedProfile profile={data.profileSelect} />}
      <ActionButtons />
    </UserInformation>
  );
}
