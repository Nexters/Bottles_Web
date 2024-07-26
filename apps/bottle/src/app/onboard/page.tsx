'use client';

import { Asset } from '@bottlesteam/ui';
import { useStep } from './StepProvider';
import { MBTI } from './_steps/MBTI';
import { Height } from './_steps/height';
import { Interests } from './_steps/interests';
import { Job } from './_steps/job';
import { Keywords } from './_steps/keywords';
import { headerStyle } from './headerStyle.css';

const steps = [
  <MBTI key={1} />,
  <Keywords key={2} />,
  <Interests key={3} />,
  <Job key={4} />,
  <Height key={5} />,
] as const;

export default function OnboardPage() {
  const { onPreviousStep, currentStep } = useStep();

  return (
    <>
      <header className={headerStyle}>
        {currentStep !== 1 && <Asset onClick={onPreviousStep} type="icon-arrow-left" />}
      </header>
      {steps[currentStep - 1]}
    </>
  );
}
