'use client';

import { MBTI } from '@/components/profile/MBTI';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { useProfileMutation } from '@/store/mutation/useProfileMuatation';
import { useCurrentUserProfileQuery } from '@/store/query/useMyInformation';

export default function MBTIEditPage() {
  const { send } = useAppBridge();
  const {
    data: { profileSelect, kakaoId },
  } = useCurrentUserProfileQuery();
  const { mutateAsync } = useProfileMutation();

  return (
    <MBTI
      initialValue={profileSelect?.mbti}
      onNext={async mbti => {
        await mutateAsync({ ...profileSelect, kakaoId, mbti });
        send({ type: AppBridgeMessageType.TOAST_OPEN, payload: { message: '프로필 수정에 성공했어요.' } });
        send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });
      }}
    />
  );
}
