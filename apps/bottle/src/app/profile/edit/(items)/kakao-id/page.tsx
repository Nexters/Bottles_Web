'use client';

import { KakaoId } from '@/components/profile/kakao-id';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { useProfileMutation } from '@/store/mutation/useProfileMuatation';
import { useCurrentUserProfileQuery } from '@/store/query/useMyInformation';
import { useRouter } from 'next/navigation';

export default function KakaoIdEditPage() {
  const { send } = useAppBridge();
  const router = useRouter();

  const {
    data: { kakaoId, profileSelect },
  } = useCurrentUserProfileQuery();
  const { mutateAsync } = useProfileMutation();

  return (
    <KakaoId
      initialValue={kakaoId}
      onNext={async kakaoId => {
        await mutateAsync({ ...profileSelect, kakaoId });
        send({ type: AppBridgeMessageType.TOAST_OPEN, payload: { message: '프로필 수정에 성공했어요.' } });
        router.back();
      }}
    />
  );
}
