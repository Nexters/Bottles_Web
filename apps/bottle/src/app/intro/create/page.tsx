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
import { useFunnel } from '@/features/funnel';
import { useIntroductionMutation } from '@/store/mutation/useIntroductionMutation';
import { useProfileImagesMutation } from '@/store/mutation/useProfileImagesMutation';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { GradientBackground } from './GradientBackground';

const MAX_STEPS = 3;

export default function CreateIntroPage() {
  const { send } = useAppBridge();
  const { mutateAsync: introMutation } = useIntroductionMutation({ type: 'create' });
  const { mutateAsync: profileImageMuatation } = useProfileImagesMutation({ type: 'create' });
  const router = useRouter();
  const autoCreatedIntro = useAutoCreatedIntro();

  const { onNextStep, currentStep } = useFunnel('/intro/create');

  const steps = useMemo(
    () => [
      <ProfileLayout key={0}>
        <GradientBackground />
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
          <ProfileLayout.Title>{'고생 많으셨어요!\n작성한 소개를 다듬어 보세요'}</ProfileLayout.Title>
          <IntroductionV2
            initialValue={autoCreatedIntro}
            onNext={async introduction => {
              await introMutation([{ question: '', answer: introduction }]);
              onNextStep();
            }}
            ctaButtonText="다음"
          />
        </ProfileLayout.Contents>
      </ProfileLayout>,
      <ProfileLayout key={2}>
        <Header />
        <ProfileLayout.Contents>
          <Stepper current={3} max={MAX_STEPS} />
          <ProfileLayout.Title>{'거의 다 왔어요!\n보틀에 담을 사진을 골라주세요'}</ProfileLayout.Title>
          <Images
            onNext={async (newImages: string[]) => {
              await profileImageMuatation(newImages);
              send({ type: AppBridgeMessageType.INTRODUCTION_COMPLETE });
            }}
            ctaButtonText="완료"
          />
        </ProfileLayout.Contents>
      </ProfileLayout>,
    ],
    [autoCreatedIntro, introMutation, onNextStep, profileImageMuatation, router.back, send]
  );

  return <>{steps[currentStep - 1]}</>;
}
