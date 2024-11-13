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
import { sendGAEvent } from '@next/third-parties/google';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

const MAX_STEPS = 7;

type CreateProfileFunnelValues = Profile & Pick<User, 'kakaoId'>;

export default function CreateProfilePage() {
  const router = useRouter();
  const { getTime } = useDurationTime();

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
              sendGAEvent('event', 'profile_create_next_click', { value: '1->2', type: '1->2' });
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
              sendGAEvent('event', 'profile_create_next_click', { value: '2->3', type: '2->3' });
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
              sendGAEvent('event', 'profile_create_next_click', { value: '3->4', type: '3->4' });
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
              sendGAEvent('event', 'profile_create_next_click', { value: '4->5', type: '4->5' });
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
              sendGAEvent('event', 'profile_create_next_click', { value: '5->6', type: '5->6' });
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
              sendGAEvent('event', 'profile_create_next_click', { value: '6->7', type: '6->7' });
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
              sendGAEvent('event', 'profile_create_next_click', { value: '6->완료', type: '6->완료' });
              const duration = getTime();
              sendGAEvent('event', 'profile_create_duration', { value: duration, duration });
              mutate({ ...(getValues() as Profile), kakaoId });
            }}
          />
        </ProfileLayout.Contents>
      </ProfileLayout>,
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [getValue, getValues, mutate, onNextStep, router.back]
  );

  return <>{newSteps[currentStep - 1]}</>;
}
