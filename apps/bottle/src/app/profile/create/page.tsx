'use client';

import { Header } from '@/components/common/header';
import { Stepper } from '@/components/common/stepper';
import { MBTI } from '@/components/profile/MBTI';
import { Alcohol } from '@/components/profile/alcohol';
import { Height } from '@/components/profile/height';
import { Interests } from '@/components/profile/interests';
import { Job } from '@/components/profile/job';
import { KakaoId } from '@/components/profile/kakao-id';
import { Keywords } from '@/components/profile/keywords';
import { ProfileLayout } from '@/components/profile/layout';
import { Region } from '@/components/profile/region';
import { Religion } from '@/components/profile/religion';
import { Smoking } from '@/components/profile/smoking';
import { useFunnel } from '@/features/funnel';
import { createInit, POST } from '@/features/server';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { Profile } from '@/models/profile';
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
    <ProfileLayout key={1}>
      <Header />
      <Stepper current={1} max={MAX_STEPS} />
      <MBTI
        initialValue={getValue('mbti')}
        onNext={mbti => {
          onNextStep('mbti', mbti);
        }}
        ctaButtonText="다음"
      />
    </ProfileLayout>,
    <ProfileLayout key={2}>
      <Header onGoBack={router.back} />
      <Stepper current={2} max={MAX_STEPS} />
      <Keywords
        initialValue={getValue('keyword')}
        onNext={keyword => {
          onNextStep('keyword', keyword);
        }}
        ctaButtonText="다음"
      />
    </ProfileLayout>,
    <ProfileLayout key={3}>
      <Header onGoBack={router.back} />
      <Stepper current={3} max={MAX_STEPS} />
      <Interests
        initialValue={getValue('interest')}
        onNext={interest => {
          onNextStep('interest', interest);
        }}
        ctaButtonText="다음"
      />
    </ProfileLayout>,
    <ProfileLayout key={4}>
      <Header onGoBack={router.back} />
      <Stepper current={4} max={MAX_STEPS} />
      <Job
        initialValue={getValue('job')}
        onNext={job => {
          onNextStep('job', job);
        }}
        ctaButtonText="다음"
      />
    </ProfileLayout>,
    <ProfileLayout key={5}>
      <Header onGoBack={router.back} />
      <Stepper current={5} max={MAX_STEPS} />
      <Height
        initialValue={getValue('height')}
        onNext={height => {
          onNextStep('height', height);
        }}
        ctaButtonText="다음"
      />
    </ProfileLayout>,
    <ProfileLayout key={6}>
      <Header onGoBack={router.back} />
      <Stepper current={6} max={MAX_STEPS} />
      <Smoking
        initialValue={getValue('smoking')}
        onNext={smoking => {
          onNextStep('smoking', smoking);
        }}
        ctaButtonText="다음"
      />
    </ProfileLayout>,
    <ProfileLayout key={7}>
      <Header onGoBack={router.back} />
      <Stepper current={7} max={MAX_STEPS} />
      <Alcohol
        initialValue={getValue('alcohol')}
        onNext={alcohol => {
          onNextStep('alcohol', alcohol);
        }}
        ctaButtonText="다음"
      />
    </ProfileLayout>,
    <ProfileLayout key={8}>
      <Header onGoBack={router.back} />
      <Stepper current={8} max={MAX_STEPS} />
      <Religion
        initialValue={getValue('religion')}
        onNext={religion => {
          onNextStep('religion', religion);
        }}
        ctaButtonText="다음"
      />
    </ProfileLayout>,
    <ProfileLayout key={9}>
      <Header onGoBack={router.back} />
      <Stepper current={9} max={MAX_STEPS} />
      <Region
        initialValue={getValue('region')}
        onNext={region => {
          onNextStep('region', region);
        }}
        ctaButtonText="다음"
      />
    </ProfileLayout>,
    <ProfileLayout key={10}>
      <Header onGoBack={router.back} />
      <Stepper current={10} max={MAX_STEPS} />
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
    </ProfileLayout>,
  ];

  return (
    <>
      <CreateProfileProvider>{steps[currentStep - 1]}</CreateProfileProvider>
    </>
  );
}
