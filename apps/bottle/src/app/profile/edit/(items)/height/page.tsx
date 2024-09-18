'use client';

import { Height } from '@/components/profile/height';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';

export default function HeightEditPage() {
  const { send } = useAppBridge();

  return (
    <Height
      onNext={() => {
        send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });
      }}
    />
  );
}
