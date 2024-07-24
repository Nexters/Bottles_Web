'use client';

import { Asset } from '@bottlesteam/ui';
import { Stepper } from '../../components/stepper';
import { useStep } from './StepProvider';
import { MBTI } from './_steps/MBTI';
import { Keywords } from './_steps/keywords';
import { headerStyle } from './headerStyle.css';

const MAX_STEPS = 9;

const steps = [<MBTI key={1} />, <Keywords key={2} />] as const;

export default function OnboardPage() {
  const { onPreviousStep, currentStep } = useStep();

  return (
    <>
      <header className={headerStyle}>
        {currentStep !== 1 && <Asset onClick={onPreviousStep} type="icon-arrow-left" />}
      </header>
      <Stepper current={currentStep} max={MAX_STEPS} />
      {steps[currentStep - 1]}
    </>
  );
}
