'use client';

import { Region } from '@/components/profile/region';
import { useProfileMutation } from '@/store/mutation/useProfileMuatation';
import { useCurrentUserProfileQuery } from '@/store/query/useCurrentUserProfileQuery';
import { useRouter } from 'next/navigation';

export default function RegionEditPage() {
  const router = useRouter();

  const {
    data: { kakaoId, profileSelect },
  } = useCurrentUserProfileQuery();
  const { mutate } = useProfileMutation({ type: 'edit' });

  return (
    <Region
      initialValue={profileSelect.region}
      onNext={region => {
        if (region.city === profileSelect.region.city && region.state === profileSelect.region.state) {
          router.back();
          return;
        }
        mutate({ ...profileSelect, kakaoId, region });
      }}
    />
  );
}
