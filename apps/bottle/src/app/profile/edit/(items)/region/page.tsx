'use client';

import { Region } from '@/components/profile/region';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { useCurrentUserProfileQuery } from '@/store/query/useMyInformation';

export default function RegionEditPage() {
  const { send } = useAppBridge();
  const {
    data: { profileSelect },
  } = useCurrentUserProfileQuery();

  return (
    <Region
      initialValue={profileSelect.region}
      onNext={() => {
        send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });
      }}
    />
  );
}
