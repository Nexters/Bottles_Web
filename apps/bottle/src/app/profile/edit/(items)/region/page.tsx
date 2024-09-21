'use client';

import { Region } from '@/components/profile/region';
import { useProfileEditPage } from '@/hooks/useProfileEditPage';

export default function RegionEditPage() {
  const { goBack, profile, edit, kakaoId } = useProfileEditPage();

  return (
    <Region
      initialValue={profile.region}
      onNext={region => {
        if (region.city === profile.region.city && region.state === profile.region.state) {
          goBack();
          return;
        }
        edit({ ...profile, kakaoId, region });
      }}
    />
  );
}
