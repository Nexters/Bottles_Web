'use client';

import { Header } from '@/components/header';
import { useStep } from '@/features/steps/StepProvider';
import { Asset } from '@bottlesteam/ui';
import { useRouter } from 'next/navigation';
import { MBTI } from '../_steps/MBTI';
import { Alcohol } from '../_steps/alcohol';
import { Height } from '../_steps/height';
import { Interests } from '../_steps/interests';
import { Job } from '../_steps/job';
import { KaKaoId } from '../_steps/kakao-id';
import { Keywords } from '../_steps/keywords';
import { Region } from '../_steps/region';
import { Religion } from '../_steps/religion';
import { Smoking } from '../_steps/smoking';

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
  <KaKaoId key={10} />,
] as const;

export default function CreateProfilePage() {
  const router = useRouter();
  const { currentStep } = useStep();

  return (
    <>
      <Header>
        {currentStep > 1 && (
          <button style={{ background: 'none', border: 'none' }}>
            <Asset onClick={() => router.back()} type="icon-arrow-left" aria-label="go-back-icon" />
          </button>
        )}
      </Header>
      {steps[currentStep - 1]}
    </>
  );
}
