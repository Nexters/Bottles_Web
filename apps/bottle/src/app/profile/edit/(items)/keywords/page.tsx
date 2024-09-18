'use client';

import { Keywords } from '@/components/profile/keywords';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';

export default function KeywordsEditPage() {
  const { send } = useAppBridge();

  return (
    <Keywords
      onNext={() => {
        send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });
      }}
    />
  );
}
