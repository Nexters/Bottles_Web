'use client';

import { UserInformation } from '@/components/common/user-information';
import { Bottle } from '@/models/bottle';
import { Asset, FixedBottomCTAButton, spacings } from '@bottlesteam/ui';
import { useUserAgent } from '@bottlesteam/utils';

const ANDROID_INTENT_SCHEME = 'intent://main#Intent;scheme=bottle;package=com.team.bottles;end';

export function BottleDetail({ bottleDetail: user }: { bottleDetail: Bottle }) {
  const userAgent = useUserAgent();

  const handleInstall = () => {
    if (!userAgent.isMobile) {
      alert('모바일에서만 설치 가능합니다.');
      return;
    }
    if (userAgent.isAndroid) {
      window.location.href = ANDROID_INTENT_SCHEME;
    }
    if (userAgent.isIOS) {
      // TODO: add iOS scheme
      alert('iOS 대응 예정...ㅠ');
    }
  };

  return (
    <>
      <UserInformation hasCTAButton>
        <UserInformation.BasicInformationArea
          likeMessage={user.likeMessage}
          userImageUrl={user.userImageUrl}
          age={user.age}
          userName={user.userName}
        />
        <UserInformation.IntroductionCard title={`${user.userName}님이 보내는 편지`} introduction={user.introduction} />
        <UserInformation.SelectedProfile profile={user.profileSelect} />
      </UserInformation>
      <FixedBottomCTAButton variant="one" onClick={handleInstall}>
        <Asset type="icon-letter" style={{ marginRight: spacings.xs }} />
        보틀 설치하고 대화 시작하기
      </FixedBottomCTAButton>
    </>
  );
}
