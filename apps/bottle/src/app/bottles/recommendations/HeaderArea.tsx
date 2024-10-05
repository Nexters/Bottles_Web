'use client';

import { Header } from '@/components/common/header';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';

export function HeaderArea() {
  const { send } = useAppBridge();

  return (
    <Header
      onGoBack={() => {
        send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });
      }}
    />
  );
}
