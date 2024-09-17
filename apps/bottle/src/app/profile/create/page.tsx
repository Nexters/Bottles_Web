'use client';

import { Header } from '@/components/header';
import { useFunnel } from '@/features/funnel';
import { createInit, POST } from '@/features/server';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { Step } from '@/features/steps/StepContainer';
import { Profile } from '@/models/profile';
import { Asset } from '@bottlesteam/ui';
import { useRouter } from 'next/navigation';
import { CreateProfileProvider } from './CreateProfileProvider';
import { MBTI } from './_steps/MBTI';
import { Alcohol } from './_steps/alcohol';
import { Height } from './_steps/height';
import { Interests } from './_steps/interests';
import { Job } from './_steps/job';
import { KakaoId } from './_steps/kakao-id';
import { Keywords } from './_steps/keywords';
import { Region } from './_steps/region';
import { Religion } from './_steps/religion';
import { Smoking } from './_steps/smoking';

const MAX_STEPS = 10;

interface CreateProfileFunnel extends Profile {
  kakaoId: string;
}

export default function CreateProfilePage() {
  const router = useRouter();

  const { onNextStep, currentStep, values } = useFunnel<CreateProfileFunnel>('/profile/create');

  const steps = [
    <Step stepper={{ current: 1, max: MAX_STEPS }} key={2}>
      <MBTI
        initialValue={values.mbti}
        onNext={mbti => {
          onNextStep('mbti', mbti);
        }}
        ctaButtonText="다음"
      />
    </Step>,
    <Step stepper={{ current: 2, max: MAX_STEPS }} key={3}>
      <Keywords
        initialValue={values.keyword}
        onNext={keyword => {
          onNextStep('keyword', keyword);
        }}
        ctaButtonText="다음"
      />
    </Step>,
    <Step stepper={{ current: 3, max: MAX_STEPS }} key={4}>
      <Interests
        initialValue={values.interest}
        onNext={interest => {
          onNextStep('interest', interest);
        }}
        ctaButtonText="다음"
      />
    </Step>,
    <Step stepper={{ current: 4, max: MAX_STEPS }} key={5}>
      <Job
        initialValue={values.job}
        onNext={job => {
          onNextStep('job', job);
        }}
        ctaButtonText="다음"
      />
    </Step>,
    <Step stepper={{ current: 5, max: MAX_STEPS }} key={6}>
      <Height
        initialValue={values.height}
        onNext={height => {
          onNextStep('height', height);
        }}
        ctaButtonText="다음"
      />
    </Step>,
    <Step stepper={{ current: 6, max: MAX_STEPS }} key={7}>
      <Smoking
        initialValue={values.smoking}
        onNext={smoking => {
          onNextStep('smoking', smoking);
        }}
        ctaButtonText="다음"
      />
    </Step>,
    <Step stepper={{ current: 7, max: MAX_STEPS }} key={8}>
      <Alcohol
        initialValue={values.alcohol}
        onNext={alcohol => {
          onNextStep('alcohol', alcohol);
        }}
        ctaButtonText="다음"
      />
    </Step>,
    <Step stepper={{ current: 8, max: MAX_STEPS }} key={9}>
      <Religion
        initialValue={values.religion}
        onNext={religion => {
          onNextStep('religion', religion);
        }}
        ctaButtonText="다음"
      />
    </Step>,
    <Step stepper={{ current: 9, max: MAX_STEPS }} key={10}>
      <Region
        initialValue={values.region}
        onNext={region => {
          onNextStep('region', region);
        }}
        ctaButtonText="다음"
      />
    </Step>,
    <Step stepper={{ current: 10, max: MAX_STEPS }} key={11}>
      <KakaoId
        initialValue={values.kakaoId}
        onNext={async kakaoId => {
          await POST(
            `/api/v1/profile/choice`,
            getClientSideTokens(),
            createInit(getClientSideTokens().accessToken, { ...values, kakaoId })
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
