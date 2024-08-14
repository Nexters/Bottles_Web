'use client';

import { Header } from '@/components/header';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { Asset } from '@bottlesteam/ui';

export default function DefaultErrorPage() {
  const { send } = useAppBridge();

  return (
    <div>
      <Header>
        <button
          onClick={() => send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE })}
          style={{ background: 'none', border: 'none' }}
        >
          <Asset type="icon-arrow-left" />
        </button>
      </Header>
    </div>
  );
}
