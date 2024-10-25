'use client';

import { Header } from '@/components/common/header';
import { Stepper } from '@/components/common/stepper';
import { Images } from '@/components/intro/images';
import { IntroductionV2 } from '@/components/intro/introductionV2';
import { Questions } from '@/components/intro/questions';
import { ProfileLayout } from '@/components/profile/layout';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { useAutoCreatedIntro } from '@/features/auto-create-intro/useAutoCreateIntro';
import { bottleStorage, keyMap } from '@/features/bottle-storage/bottleStorage';
import { ClientGate } from '@/features/client-gate';
import { useFunnel } from '@/features/funnel';
import { Introduction as IntroductionType } from '@/models/introduction';
import { useIntroductionMutation } from '@/store/mutation/useIntroductionMutation';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
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
  const router = useRouter();
  const autoCreatedIntro = useAutoCreatedIntro();

  const { onNextStep, currentStep, getValue } = useFunnel<CreateIntroFunnelValues>('/intro/create');

  const steps = useMemo(
    () => [
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
              bottleStorage.setItem(keyMap.introAnswers, answers);
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
            initialValue={autoCreatedIntro}
            onNext={async introduction => {
              try {
                await mutateAsync([{ question: '', answer: introduction }]);
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
        {/* <Header onGoBack={router.back} /> */}
        <Header />
        <ProfileLayout.Contents>
          <Stepper current={3} max={MAX_STEPS} />
          <Images initialValue={getValue('imageUrl')} onNext={() => {}} ctaButtonText="완료" />
        </ProfileLayout.Contents>
      </ProfileLayout>,
    ],
    [autoCreatedIntro, mutateAsync, onNextStep, router, send, getValue]
  );

  // return <ClientGate>{steps[currentStep - 1]}</ClientGate>;
  return <ClientGate>{steps[currentStep - 1]}</ClientGate>;
}
