'use client';

import { KakaoId } from '@/components/profile/kakao-id';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';

export default function KakaoIdEditPage() {
  const { send } = useAppBridge();

  return (
    <KakaoId
      onNext={() => {
        send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });
      }}
    />
  );
}
