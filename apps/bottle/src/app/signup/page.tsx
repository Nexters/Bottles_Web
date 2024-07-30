'use client';

import { Header } from '@/components/header';
import { useStep } from '@/features/steps/StepProvider';
import { Asset } from '@bottlesteam/ui';

const steps = [] as const;

export default function SignupPage() {
  const { onPreviousStep, currentStep } = useStep();

  return (
    <>
      <Header>{currentStep !== 1 && <Asset onClick={onPreviousStep} type="icon-arrow-left" />}</Header>
      {steps[currentStep - 1]}
    </>
  );
}
