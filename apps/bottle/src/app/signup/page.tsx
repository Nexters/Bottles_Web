'use client';

import { Header } from '@/components/header';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { useStep } from '@/features/steps/StepProvider';
import { Asset } from '@bottlesteam/ui';
import { useRouter } from 'next/navigation';
import { Agreement } from './_steps/agreement';
import { Authorize } from './_steps/authorize';
import { Information } from './_steps/information';

const steps = [<Agreement key={1} />, <Information key={2} />, <Authorize key={3} />] as const;

export default function SignupPage() {
  const { send } = useAppBridge();
  const router = useRouter();
  const { currentStep } = useStep();

  const handleGoBack = () => {
    if (currentStep === 1) {
      send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });
      return;
    }
    router.back();
  };

  return (
    <>
      <Header>{<Asset onClick={handleGoBack} type="icon-arrow-left" />}</Header>
      {steps[currentStep - 1]}
    </>
  );
}
