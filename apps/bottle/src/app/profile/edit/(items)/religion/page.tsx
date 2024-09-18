'use client';

import { Religion } from '@/components/profile/religion';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';

export default function ReligionEditPage() {
  const { send } = useAppBridge();

  return (
    <Religion
      onNext={() => {
        send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });
      }}
    />
  );
}
