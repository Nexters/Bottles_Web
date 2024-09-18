'use client';

import { MBTI } from '@/components/profile/MBTI';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';

export default function MBTIEditPage() {
  const { send } = useAppBridge();

  return (
    <MBTI
      onNext={() => {
        send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });
      }}
    />
  );
}
