'use client';

import { Smoking } from '@/components/profile/smoking';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';

export default function SmokingEditPage() {
  const { send } = useAppBridge();

  return (
    <Smoking
      onNext={() => {
        send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });
      }}
    />
  );
}
