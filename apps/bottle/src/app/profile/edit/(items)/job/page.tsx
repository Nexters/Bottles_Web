'use client';

import { Job } from '@/components/profile/job';
import { useProfileEditPage } from '@/hooks/useProfileEditPage';

export default function JobEditPage() {
  const { goBack, profile, edit, kakaoId } = useProfileEditPage();

  return (
    <Job
      initialValue={profile.job}
      onNext={job => {
        if (job === profile.job) {
          goBack();
          return;
        }
        edit({ ...profile, kakaoId, job });
      }}
    />
  );
}
