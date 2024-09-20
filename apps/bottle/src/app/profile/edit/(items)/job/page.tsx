'use client';

import { Job } from '@/components/profile/job';
import { useProfileMutation } from '@/store/mutation/useProfileMuatation';
import { useCurrentUserProfileQuery } from '@/store/query/useCurrentUserProfileQuery';
import { useRouter } from 'next/navigation';

export default function JobEditPage() {
  const router = useRouter();

  const {
    data: { kakaoId, profileSelect },
  } = useCurrentUserProfileQuery();
  const { mutate } = useProfileMutation({ type: 'edit' });

  return (
    <Job
      initialValue={profileSelect.job}
      onNext={job => {
        if (job === profileSelect.job) {
          router.back();
          return;
        }
        mutate({ ...profileSelect, kakaoId, job });
      }}
    />
  );
}
