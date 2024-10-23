'use client';

import { Introduction } from '@/components/intro/introduction';
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
    <ProfileLayout.Contents>
      <Introduction
        initialValue={introduction}
        onNext={introduction => {
          if (introduction[0]?.answer === initialAnswer) {
            router.back();
            return;
          }
          mutate(introduction);
        }}
        ctaButtonText="완료"
      />
    </ProfileLayout.Contents>
  );
}
