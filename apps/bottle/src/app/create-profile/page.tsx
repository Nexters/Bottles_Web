'use client';

import { Header } from '@/components/common/header';
import { Step } from '@/features/steps/StepContainer';
import { useStep } from '@/features/steps/StepProvider';
import { Asset } from '@bottlesteam/ui';
import { useRouter } from 'next/navigation';
import { CreateProfileProvider } from './CreateProfileProvider';
import { MBTI } from './_steps/MBTI';
import { Alcohol } from './_steps/alcohol';
import { Height } from './_steps/height';
import { Interests } from './_steps/interests';
import { Job } from './_steps/job';
import { KaKaoId } from './_steps/kakao-id';
import { Keywords } from './_steps/keywords';
import { Region } from './_steps/region';
import { Religion } from './_steps/religion';
import { Smoking } from './_steps/smoking';

const MAX_STEPS = 10;

const steps = [
  <Step stepper={{ current: 1, max: MAX_STEPS }} key={2}>
    <MBTI />
  </Step>,
  <Step stepper={{ current: 2, max: MAX_STEPS }} key={3}>
    <Keywords />
  </Step>,
  <Step stepper={{ current: 3, max: MAX_STEPS }} key={4}>
    <Interests />
  </Step>,
  <Step stepper={{ current: 4, max: MAX_STEPS }} key={5}>
    <Job />
  </Step>,
  <Step stepper={{ current: 5, max: MAX_STEPS }} key={6}>
    <Height />
  </Step>,
  <Step stepper={{ current: 6, max: MAX_STEPS }} key={7}>
    <Smoking />
  </Step>,
  <Step stepper={{ current: 7, max: MAX_STEPS }} key={8}>
    <Alcohol />
  </Step>,
  <Step stepper={{ current: 8, max: MAX_STEPS }} key={9}>
    <Religion />
  </Step>,
  <Step stepper={{ current: 9, max: MAX_STEPS }} key={10}>
    <Region />
  </Step>,
  <Step stepper={{ current: 10, max: MAX_STEPS }} key={11}>
    <KaKaoId />
  </Step>,
] as const;
/**
 * @deprecated
 */
export default function CreateProfilePage() {
  const router = useRouter();
  const { currentStep } = useStep();

  return (
    <>
      <CreateProfileProvider>
        <Header>
          {currentStep > 1 && (
            <button style={{ background: 'none', border: 'none' }}>
              <Asset onClick={() => router.back()} type="icon-arrow-left" aria-label="go-back-icon" />
            </button>
          )}
        </Header>
        {steps[currentStep - 1]}
      </CreateProfileProvider>
    </>
  );
}
