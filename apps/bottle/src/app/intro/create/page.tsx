'use client';

import { Header } from '@/components/common/header';
import { Stepper } from '@/components/common/stepper';
import { Images } from '@/components/intro/images';
import { Introduction } from '@/components/intro/introduction';
import { Questions } from '@/components/intro/questions';
import { ProfileLayout } from '@/components/profile/layout';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { useFunnel } from '@/features/funnel';
import { Introduction as IntroductionType } from '@/models/introduction';
import { useIntroductionMutation } from '@/store/mutation/useIntroductionMutation';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Gradient from './gradient.png';

const MAX_STEPS = 3;

type CreateIntroFunnelValues = {
  answers: [string, string, string, string, string, string];
  introduction: IntroductionType;
  // FIXME: depends on server API
  imageUrl: string;
};

export default function CreateIntroPage() {
  const { send } = useAppBridge();
  const { mutateAsync } = useIntroductionMutation({ type: 'create' });
  const router = useRouter();

  const { onNextStep, currentStep, getValue } = useFunnel<CreateIntroFunnelValues>('/intro/create');

  const steps = [
    <>
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
            initialValue={getValue('answers')}
            onNext={async answers => {
              try {
                // await mutateAsync(introduction);
                onNextStep('answers', answers);
              } catch (error) {
                console.error(error);
              }
            }}
            ctaButtonText="다음"
          />
        </ProfileLayout.Contents>
        <Header
          onGoBack={() => {
            send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });
          }}
        />
      </ProfileLayout>
    </>,

    <ProfileLayout key={1}>
      <Header
        onGoBack={() => {
          send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });
        }}
      />
      <Stepper current={1} max={MAX_STEPS} />
      <Introduction
        initialValue={getValue('introduction')}
        onNext={async introduction => {
          try {
            await mutateAsync(introduction);
            onNextStep('introduction', introduction);
          } catch (error) {
            console.error(error);
          }
        }}
        ctaButtonText="다음"
      />
    </ProfileLayout>,
    <ProfileLayout key={1}>
      <Header onGoBack={router.back} />
      <Stepper current={2} max={MAX_STEPS} />
      <Images initialValue={getValue('imageUrl')} onNext={() => {}} ctaButtonText="완료" />
    </ProfileLayout>,
  ];

  return <>{steps[currentStep - 1]}</>;
}
