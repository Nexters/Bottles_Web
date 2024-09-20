'use client';

import { Keywords } from '@/components/profile/keywords';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { useCurrentUserProfileQuery } from '@/store/query/useMyInformation';

export default function KeywordsEditPage() {
  const { send } = useAppBridge();
  const {
    data: { profileSelect },
  } = useCurrentUserProfileQuery();

  return (
    <Keywords
      initialValue={profileSelect.keyword}
      onNext={() => {
        send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });
      }}
    />
  );
}
