'use client';

import { Header } from '@/components/common/header';
import { Stepper } from '@/components/common/stepper';
import { Images } from '@/components/intro/images';
import { Introduction } from '@/components/intro/introduction';
import { ProfileLayout } from '@/components/profile/layout';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { useFunnel } from '@/features/funnel';
import { useRouter } from 'next/navigation';

const MAX_STEPS = 2;

type CreateIntroFunnelValues = {
  introduction: [{ question: string; answer: string }];
  // FIXME: depends on server API
  imageUrl: string;
};

export default function CreateIntroPage() {
  const { send } = useAppBridge();
  const router = useRouter();

  const { onNextStep, currentStep, getValue } = useFunnel<CreateIntroFunnelValues>('/intro/create');

  const steps = [
    <ProfileLayout key={1}>
      <Header
        onGoBack={() => {
          send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });
        }}
      />
      <Stepper current={1} max={MAX_STEPS} />
      <Introduction
        initialValue={getValue('introduction')}
        onNext={() => {
          onNextStep('introduction', [{ answer: '', question: '' }]);
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
