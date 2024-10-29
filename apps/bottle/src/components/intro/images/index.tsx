import { ProfileLayout } from '@/components/profile/layout';
import { BaseProfileComponentProps } from '@/components/profile/types';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { uploadImages } from '@/features/image-upload';
import { useProfileImageMutation } from '@/store/mutation/useProfileImageMutation';
import { ImageInputs, spacings } from '@bottlesteam/ui';
import { useCallback, useMemo, useState } from 'react';
import { ExampleCarousel } from './ExampleCarousel';

export function Images({ ctaButtonText, initialValue }: BaseProfileComponentProps<(string | File)[], string[]>) {
  const { send } = useAppBridge();
  const { mutate } = useProfileImageMutation();
  const [images, setImages] = useState<(File | string)[]>(initialValue ?? []);

  const initialImagesSet = useMemo(() => new Set(initialValue), [initialValue]);

  const getNewImages = useCallback(
    () => images.filter(image => !initialImagesSet.has(image)),
    [initialImagesSet, images]
  );

  return (
    <>
      <ImageInputs
        onMaxExceeded={() =>
          send({
            type: AppBridgeMessageType.TOAST_OPEN,
            payload: { message: '사진은 최대 3개까지만 업로드 가능합니다.' },
          })
        }
        images={images}
        maxImages={3}
        labels={['프로필 사진']}
        onChange={files => {
          setImages(files);
        }}
        style={{ marginTop: spacings.xxl }}
      />
      <ExampleCarousel />
      <ProfileLayout.FixedButton
        onClick={async () => {
          const newImages = getNewImages();
          const urls = await uploadImages(newImages);
          mutate(urls);
          urls.forEach(url => {
            console.log('URL: ', url);
          });
        }}
      >
        {ctaButtonText}
      </ProfileLayout.FixedButton>
    </>
  );
}
