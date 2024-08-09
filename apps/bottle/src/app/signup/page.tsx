'use client';

import { Header } from '@/components/header';
import { useStep } from '@/features/steps/StepProvider';
import { useUserAgent } from '@/features/web-view/UserAgentProvider';
import { webViewAPI } from '@/features/web-view/api';
import { Asset } from '@bottlesteam/ui';
import { useRouter } from 'next/navigation';
import { Authorize } from './_steps/authorize';
import { Information } from './_steps/information';

const steps = [<Information key={1} />, <Authorize key={2} />] as const;

export default function SignupPage() {
  const router = useRouter();
  const userAgent = useUserAgent();
  const { currentStep } = useStep();

  const handleGoBack = () => {
    if (currentStep === 1) {
      webViewAPI({
        type: 'onWebViewClose',
        payload: {
          iOS: {
            type: 'onWebViewClose',
          },
        },
        userAgent,
      });
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
