'use client';

import { Interests } from '@/components/profile/interests';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';

export default function InterestsEditPage() {
  const { send } = useAppBridge();

  return (
    <Interests
      onNext={() => {
        send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });
      }}
    />
  );
}
