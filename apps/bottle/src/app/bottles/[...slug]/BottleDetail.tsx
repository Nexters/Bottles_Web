'use client';

import { UserInformation } from '@/components/user-information';
import { OverlayProvider } from 'overlay-kit';
import { useBottleDetailQuery } from '../../../store/query/useBottleDetailQuery';

interface Props {
  id: number;
}

export function BottleDetail({ id }: Props) {
  const { data: user } = useBottleDetailQuery(id);

  console.log('Bottle Detail', user);

  return (
    <>
      <OverlayProvider>
        <UserInformation style={{ paddingBottom: '109px' }}>
          <UserInformation.BasicInformationArea
            likeMessage={user.likeMessage}
            userImageUrl={user.userImageUrl}
            age={user.age}
            userName={user.userName}
          />
          <UserInformation.IntroductionCard
            title={`${user.userName}님이 보내는 편지`}
            introduction={user.introduction}
          />
          <UserInformation.SelectedProfile profile={user.profileSelect} />
        </UserInformation>
      </OverlayProvider>
    </>
  );
}
