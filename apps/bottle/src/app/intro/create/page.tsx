'use client';

import { Header } from '@/components/common/header';
import { Stepper } from '@/components/common/stepper';
import { Images } from '@/components/intro/images';
import { IntroductionV2 } from '@/components/intro/introductionV2';
import { Questions } from '@/components/intro/questions';
import { ProfileLayout } from '@/components/profile/layout';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { useFunnel } from '@/features/funnel';
import { Introduction as IntroductionType } from '@/models/introduction';
import { useIntroductionMutation } from '@/store/mutation/useIntroductionMutation';
import { useCurrentUserProfileQuery } from '@/store/query/useCurrentUserProfileQuery';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Gradient from './gradient.png';

const MAX_STEPS = 3;

type CreateIntroFunnelValues = {
  introduction: IntroductionType;
  // FIXME: depends on server API
  imageUrl: string;
};

export default function CreateIntroPage() {
  const { send } = useAppBridge();
  const { mutateAsync } = useIntroductionMutation({ type: 'create' });
  const {
    data: { introduction },
  } = useCurrentUserProfileQuery();
  const router = useRouter();

  const { onNextStep, currentStep, getValue } = useFunnel<CreateIntroFunnelValues>('/intro/create');

  const steps = [
    <ProfileLayout key={0}>
      <Image
        src={Gradient}
        alt="gradient"
        objectFit="cover"
        priority
        aria-hidden
        width={776}
        height={613}
        style={{
          userSelect: 'none',
          position: 'absolute',
          top: 48,
          zIndex: 0,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
      <ProfileLayout.Contents style={{ padding: '0 16px', position: 'absolute', top: 48, left: 0 }}>
        <Stepper current={1} max={MAX_STEPS} />
        <Questions
          onNext={answers => {
            localStorage.setItem('intro-answers', JSON.stringify(answers));
            onNextStep();
          }}
          ctaButtonText="다음"
        />
      </ProfileLayout.Contents>
      <Header
        onGoBack={() => {
          send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });
        }}
      />
    </ProfileLayout>,
    <ProfileLayout key={1}>
      <Header onGoBack={router.back} />
      <ProfileLayout.Contents>
        <Stepper current={2} max={MAX_STEPS} />
        <IntroductionV2
          initialValue={introduction}
          onNext={async introduction => {
            try {
              await mutateAsync(introduction);
              onNextStep();
            } catch (error) {
              console.error(error);
            }
          }}
          ctaButtonText="다음"
        />
      </ProfileLayout.Contents>
    </ProfileLayout>,
    <ProfileLayout key={2}>
      <Header onGoBack={router.back} />
      <ProfileLayout.Contents>
        <Stepper current={3} max={MAX_STEPS} />
        <Images initialValue={getValue('imageUrl')} onNext={() => {}} ctaButtonText="완료" />
      </ProfileLayout.Contents>
    </ProfileLayout>,
  ];

  return <>{steps[currentStep - 1]}</>;
}
