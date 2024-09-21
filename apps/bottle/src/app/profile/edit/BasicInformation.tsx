'use client';

import { Profile } from '@/components/common/profile';
import { useCurrentUserProfileQuery } from '@/store/query/useCurrentUserProfileQuery';
import { spacings } from '@bottlesteam/ui';

export function BasicInformation() {
  const {
    data: { imageUrl, age, userName },
  } = useCurrentUserProfileQuery();

  return (
    <Profile
      image={imageUrl}
      name={userName}
      age={age}
      style={{ marginTop: spacings.xxl }}
      // TODO: Add profile image edit page
      // onEditClick={() => {
      //   send({ type: AppBridgeMessageType.OPEN_WEB_VIEW, payload: { href: buildWebViewUrl('/profile/edit/image') } });
      // }}
    />
  );
}
