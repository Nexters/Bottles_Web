'use client';

import { useStep } from '@/features/steps/StepProvider';
import { MBTI } from './_steps/MBTI';
import { Alcohol } from './_steps/alcohol';
import { Height } from './_steps/height';
import { Interests } from './_steps/interests';
import { Job } from './_steps/job';
import { Keywords } from './_steps/keywords';
import { Region } from './_steps/region';
import { Religion } from './_steps/religion';
import { Smoking } from './_steps/smoking';

const steps = [
  <MBTI key={1} />,
  <Keywords key={2} />,
  <Interests key={3} />,
  <Job key={4} />,
  <Height key={5} />,
  <Smoking key={6} />,
  <Alcohol key={7} />,
  <Religion key={8} />,
  <Region key={9} />,
] as const;

export default function CreateProfilePage() {
  const { currentStep } = useStep();

  return (
    <>
      {/* <Header>{currentStep !== 1 && <Asset onClick={onPreviousStep} type="icon-arrow-left" />}</Header> */}
      {steps[currentStep - 1]}
    </>
  );
}
