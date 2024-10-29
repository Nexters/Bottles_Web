'use client';

import { IntroductionV2 } from '@/components/intro/introductionV2';
import { ProfileLayout } from '@/components/profile/layout';
import { useIntroductionMutation } from '@/store/mutation/useIntroductionMutation';
import { useCurrentUserProfileQuery } from '@/store/query/useCurrentUserProfileQuery';
import { useRouter } from 'next/navigation';

/**
 * @deprecated
 */
export default function IntroductionEditPage() {
  const {
    data: { introduction },
  } = useCurrentUserProfileQuery();
  const router = useRouter();

  const { mutate } = useIntroductionMutation({ type: 'edit' });

  const initialAnswer = introduction[0]?.answer ?? '';

  return (
    <>
      <ProfileLayout.Title>{'보틀에 담을\n소개를 작성해 주세요'}</ProfileLayout.Title>
      <IntroductionV2
        initialValue={initialAnswer}
        onNext={introduction => {
          if (introduction === initialAnswer) {
            router.back();
            return;
          }
          mutate([{ question: '', answer: introduction }]);
        }}
        ctaButtonText="완료"
      />
    </>
  );
}
