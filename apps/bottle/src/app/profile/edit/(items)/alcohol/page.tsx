'use client';

import { Alcohol } from '@/components/profile/alcohol';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';

export default function AlcoholEditPage() {
  const { send } = useAppBridge();

  return (
    <Alcohol
      onNext={() => {
        send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });
      }}
    />
  );
}
