'use client';

import { UserInformation } from '@/components/common/user-information';
import { Bottle } from '@/models/bottle';
import { Asset, FixedBottomCTAButton, spacings } from '@bottlesteam/ui';
import { useUserAgent } from '@bottlesteam/utils';
import { sendGAEvent } from '@next/third-parties/google';

const ANDROID_INDENT_SCHEME = 'intent://main#Intent;scheme=bottle;package=com.team.bottles;end';
const IOS_STORE_SCHEME =
  'https://apps.apple.com/kr/app/%EB%B3%B4%ED%8B%80-%EB%84%88%EC%97%90%EA%B2%8C-%EB%B3%B4%EB%82%B4%EB%8A%94-%ED%8E%B8%EC%A7%80/id6602889623';

export function BottleDetail({ bottleDetail: user }: { bottleDetail: Bottle }) {
  const userAgent = useUserAgent();

  const handleInstall = () => {
    sendGAEvent('event', 'install_button_click', { value: '설치 버튼 클릭' });
    if (!userAgent.isMobile) {
      alert('모바일에서만 설치 가능합니다.');
      return;
    }
    if (userAgent.isAndroid) {
      window.location.href = ANDROID_INDENT_SCHEME;
    }
    if (userAgent.isIOS) {
      window.location.href = IOS_STORE_SCHEME;
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
