'use client';

import { Profile } from '@/components/common/profile';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { buildWebViewUrl } from '@/features/app-bridge/utils';
import { useMyInformationQuery } from '@/store/query/useMyInformation';
import { spacings } from '@bottlesteam/ui';

export function BasicInformation() {
  const { send } = useAppBridge();
  const {
    data: { imageUrl, age, userName },
  } = useMyInformationQuery();

  return (
    <Profile
      image={imageUrl}
      name={userName}
      age={age}
      style={{ marginTop: spacings.xxl }}
      onEditClick={() => {
        send({ type: AppBridgeMessageType.OPEN_WEB_VIEW, payload: { href: buildWebViewUrl('/profile/edit/image') } });
      }}
    />
  );
}
