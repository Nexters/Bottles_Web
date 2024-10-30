'use client';

import { Images } from '@/components/intro/images';
import { ProfileLayout } from '@/components/profile/layout';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { useUserAgent } from '@/features/user-agent/UserAgentProvider';
import { useProfileImagesMutation } from '@/store/mutation/useProfileImagesMutation';
import { useProfileImagesQuery } from '@/store/query/useProfileImagesQuery';
import { useRouter } from 'next/navigation';

/**
 * checks if two arrays have the exact same value at the exact same index
 */
const isSameArray = (array1: string[], array2: string[]) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

export default function ProfileImagesEditPage() {
  const { isIOS, isMobile } = useUserAgent();
  const { send } = useAppBridge();
  const {
    data: { userImages: initialImages },
  } = useProfileImagesQuery();
  const { mutateAsync } = useProfileImagesMutation({ type: 'edit' });
  const router = useRouter();

  return (
    <>
      <ProfileLayout.Title>{'보틀에 담을 나의\n사진을 골라주세요'}</ProfileLayout.Title>
      <Images
        initialValue={initialImages}
        onNext={async images => {
          if (isSameArray(images, initialImages)) {
            router.back();
            return;
          }
          await mutateAsync(images);
          if (isIOS && isMobile) {
            send({ type: AppBridgeMessageType.PROFILE_IMAGE_EDIT_COMPLETE });
          }
          router.back();
        }}
        ctaButtonText="완료"
      />
    </>
  );
}
