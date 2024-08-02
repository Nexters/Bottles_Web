'use client';

import { Header } from '@/components/header';
import { useStep } from '@/features/steps/StepProvider';
import { Asset } from '@bottlesteam/ui';
import { Authorize } from './_steps/authorize';
import { Information } from './_steps/information';

const steps = [<Information key={1} />, <Authorize key={2} />] as const;

export default function SignupPage() {
  const { onPreviousStep, currentStep } = useStep();

  return (
    <>
      <Header>{currentStep !== 1 && <Asset onClick={onPreviousStep} type="icon-arrow-left" />}</Header>
      {steps[currentStep - 1]}
    </>
  );
}
