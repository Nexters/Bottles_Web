'use client';

import { ProfileLayout } from '@/components/profile/layout';
import { BaseProfileComponentProps } from '@/components/profile/types';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { uploadImages } from '@/features/image-upload';
import { ImageInputs, spacings } from '@bottlesteam/ui';
import { useCallback, useMemo, useState } from 'react';
import { ExampleCarousel } from './ExampleCarousel';

export function Images({
  ctaButtonText,
  initialValue,
  onNext,
}: BaseProfileComponentProps<(string | File)[], string[]>) {
  const { send } = useAppBridge();
  const [images, setImages] = useState<(File | string)[]>(initialValue ?? []);
  const [isLoading, setIsLoading] = useState(false);

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
        disabled={isLoading || images.length === 0}
        onClick={async () => {
          setIsLoading(true);
          const newImages = getNewImages();
          const newUrls = await uploadImages(newImages);
          await onNext([...images.filter(image => typeof image === 'string'), ...newUrls]);
          setIsLoading(false);
          newUrls.forEach(url => {
            console.log('URL: ', url);
          });
        }}
      >
        {ctaButtonText}
      </ProfileLayout.FixedButton>
    </>
  );
}
