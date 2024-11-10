'use client';

import { Header } from '@/components/common/header';
import { Stepper } from '@/components/common/stepper';
import { MBTI } from '@/components/profile/MBTI';
import { Height } from '@/components/profile/height';
import { Interests } from '@/components/profile/interests';
import { Job } from '@/components/profile/job';
import { KakaoId } from '@/components/profile/kakao-id';
import { Keywords } from '@/components/profile/keywords';
import { ProfileLayout } from '@/components/profile/layout';
import { Region } from '@/components/profile/region';
import { useDurationTime } from '@/features/analystics/useDurationTime';
import { useFunnel } from '@/features/funnel';
import { Profile } from '@/models/profile';
import { User } from '@/models/user';
import { useProfileMutation } from '@/store/mutation/useProfileMuatation';
import { sendGTMEvent } from '@next/third-parties/google';
import { useRouter, usePathname } from 'next/navigation';
import { useMemo } from 'react';

const MAX_STEPS = 7;

type CreateProfileFunnelValues = Profile & Pick<User, 'kakaoId'>;

const EVENT_NAME = 'create_profile';

export default function CreateProfilePage() {
  const router = useRouter();
  const pathname = usePathname();
  useDurationTime(duration => {
    console.log('duration', duration);
    sendGTMEvent({ duration, path: pathname }, EVENT_NAME);
  });

  const { onNextStep, currentStep, getValue, getValues } = useFunnel<CreateProfileFunnelValues>('/profile/create');
  const { mutate } = useProfileMutation({ type: 'create' });

  const newSteps = useMemo(
    () => [
      <ProfileLayout key={1}>
        <Header onGoBack={router.back} />
        <ProfileLayout.Contents>
          <Stepper current={1} max={MAX_STEPS} />
          <Job
            initialValue={getValue('job')}
            onNext={job => {
              sendGTMEvent('1->2', EVENT_NAME);
              onNextStep('job', job);
            }}
            ctaButtonText="다음"
          />
        </ProfileLayout.Contents>
      </ProfileLayout>,
      <ProfileLayout key={2}>
        <Header onGoBack={router.back} />
        <ProfileLayout.Contents>
          <Stepper current={2} max={MAX_STEPS} />
          <Height
            initialValue={getValue('height')}
            onNext={height => {
              sendGTMEvent('2->3', EVENT_NAME);
              onNextStep('height', height);
            }}
            ctaButtonText="다음"
          />
        </ProfileLayout.Contents>
      </ProfileLayout>,
      <ProfileLayout key={3}>
        <Header onGoBack={router.back} />
        <ProfileLayout.Contents>
          <Stepper current={3} max={MAX_STEPS} />
          <Region
            initialValue={getValue('region')}
            onNext={region => {
              sendGTMEvent('3->4', EVENT_NAME);
              onNextStep('region', region);
            }}
            ctaButtonText="다음"
          />
        </ProfileLayout.Contents>
      </ProfileLayout>,
      <ProfileLayout key={4}>
        <Header />
        <ProfileLayout.Contents>
          <Stepper current={4} max={MAX_STEPS} />
          <MBTI
            initialValue={getValue('mbti')}
            onNext={mbti => {
              sendGTMEvent('4->5', EVENT_NAME);
              onNextStep('mbti', mbti);
            }}
            ctaButtonText="다음"
          />
        </ProfileLayout.Contents>
      </ProfileLayout>,
      <ProfileLayout key={5}>
        <Header onGoBack={router.back} />
        <ProfileLayout.Contents>
          <Stepper current={5} max={MAX_STEPS} />
          <Keywords
            initialValue={getValue('keyword')}
            onNext={keyword => {
              sendGTMEvent('5->6', EVENT_NAME);
              onNextStep('keyword', keyword);
            }}
            ctaButtonText="다음"
          />
        </ProfileLayout.Contents>
      </ProfileLayout>,
      <ProfileLayout key={6}>
        <Header onGoBack={router.back} />
        <ProfileLayout.Contents>
          <Stepper current={6} max={MAX_STEPS} />
          <Interests
            initialValue={getValue('interest')}
            onNext={interest => {
              sendGTMEvent('6->7', EVENT_NAME);
              onNextStep('interest', interest);
            }}
            ctaButtonText="다음"
          />
        </ProfileLayout.Contents>
      </ProfileLayout>,
      <ProfileLayout key={7}>
        <Header onGoBack={router.back} />
        <ProfileLayout.Contents>
          <Stepper current={7} max={MAX_STEPS} />
          <KakaoId
            initialValue={getValue('kakaoId')}
            onNext={kakaoId => {
              sendGTMEvent('7->complete', EVENT_NAME);
              mutate({ ...(getValues() as Profile), kakaoId });
            }}
          />
        </ProfileLayout.Contents>
      </ProfileLayout>,
    ],
    [getValue, getValues, mutate, onNextStep, router.back]
  );

  return <>{newSteps[currentStep - 1]}</>;
}
