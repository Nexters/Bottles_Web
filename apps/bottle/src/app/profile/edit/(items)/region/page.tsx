'use client';

import { Region } from '@/components/profile/region';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';

export default function RegionEditPage() {
  const { send } = useAppBridge();

  return (
    <Region
      onNext={() => {
        send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });
      }}
    />
  );
}
