'use client';

import { Job } from '@/components/profile/job';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';

export default function JobEditPage() {
  const { send } = useAppBridge();

  return (
    <Job
      onNext={() => {
        send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });
      }}
    />
  );
}
