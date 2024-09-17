'use client';

import { Header } from '@/components/common/header';
import { MBTI } from '@/components/profile/MBTI';
import { Alcohol } from '@/components/profile/alcohol';
import { Height } from '@/components/profile/height';
import { Interests } from '@/components/profile/interests';
import { Job } from '@/components/profile/job';
import { KakaoId } from '@/components/profile/kakao-id';
import { Keywords } from '@/components/profile/keywords';
import { Region } from '@/components/profile/region';
import { Religion } from '@/components/profile/religion';
import { Smoking } from '@/components/profile/smoking';
import { useFunnel } from '@/features/funnel';
import { createInit, POST } from '@/features/server';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { Step } from '@/features/steps/StepContainer';
import { Profile } from '@/models/profile';
import { Asset } from '@bottlesteam/ui';
import { useRouter } from 'next/navigation';
import { CreateProfileProvider } from './CreateProfileProvider';

const MAX_STEPS = 10;

interface CreateProfileFunnel extends Profile {
  kakaoId: string;
}

export default function CreateProfilePage() {
  const router = useRouter();

  const { onNextStep, currentStep, getValue, getValues } = useFunnel<CreateProfileFunnel>('/profile/create');

  const steps = [
    <Step stepper={{ current: 1, max: MAX_STEPS }} key={2}>
      <MBTI
        initialValue={getValue('mbti')}
        onNext={mbti => {
          onNextStep('mbti', mbti);
        }}
        ctaButtonText="다음"
      />
    </Step>,
    <Step stepper={{ current: 2, max: MAX_STEPS }} key={3}>
      <Keywords
        initialValue={getValue('keyword')}
        onNext={keyword => {
          onNextStep('keyword', keyword);
        }}
        ctaButtonText="다음"
      />
    </Step>,
    <Step stepper={{ current: 3, max: MAX_STEPS }} key={4}>
      <Interests
        initialValue={getValue('interest')}
        onNext={interest => {
          onNextStep('interest', interest);
        }}
        ctaButtonText="다음"
      />
    </Step>,
    <Step stepper={{ current: 4, max: MAX_STEPS }} key={5}>
      <Job
        initialValue={getValue('job')}
        onNext={job => {
          onNextStep('job', job);
        }}
        ctaButtonText="다음"
      />
    </Step>,
    <Step stepper={{ current: 5, max: MAX_STEPS }} key={6}>
      <Height
        initialValue={getValue('height')}
        onNext={height => {
          onNextStep('height', height);
        }}
        ctaButtonText="다음"
      />
    </Step>,
    <Step stepper={{ current: 6, max: MAX_STEPS }} key={7}>
      <Smoking
        initialValue={getValue('smoking')}
        onNext={smoking => {
          onNextStep('smoking', smoking);
        }}
        ctaButtonText="다음"
      />
    </Step>,
    <Step stepper={{ current: 7, max: MAX_STEPS }} key={8}>
      <Alcohol
        initialValue={getValue('alcohol')}
        onNext={alcohol => {
          onNextStep('alcohol', alcohol);
        }}
        ctaButtonText="다음"
      />
    </Step>,
    <Step stepper={{ current: 8, max: MAX_STEPS }} key={9}>
      <Religion
        initialValue={getValue('religion')}
        onNext={religion => {
          onNextStep('religion', religion);
        }}
        ctaButtonText="다음"
      />
    </Step>,
    <Step stepper={{ current: 9, max: MAX_STEPS }} key={10}>
      <Region
        initialValue={getValue('region')}
        onNext={region => {
          onNextStep('region', region);
        }}
        ctaButtonText="다음"
      />
    </Step>,
    <Step stepper={{ current: 10, max: MAX_STEPS }} key={11}>
      <KakaoId
        initialValue={getValue('kakaoId')}
        onNext={async kakaoId => {
          await POST(
            `/api/v1/profile/choice`,
            getClientSideTokens(),
            createInit(getClientSideTokens().accessToken, { ...getValues(), kakaoId })
          );
        }}
      />
    </Step>,
  ];

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
