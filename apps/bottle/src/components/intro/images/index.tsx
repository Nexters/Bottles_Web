import { ProfileLayout } from '@/components/profile/layout';
import { BaseProfileComponentProps } from '@/components/profile/types';
import { createInit, GET } from '@/features/server';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { ImageInputs, spacings } from '@bottlesteam/ui';
import { getCookie } from 'cookies-next';
import { useCallback, useMemo, useState } from 'react';
import { ExampleCarousel } from './ExampleCarousel';

export function Images({ ctaButtonText, initialValue }: BaseProfileComponentProps<string[]>) {
  const [images, setImages] = useState<string[]>(initialValue ?? []);

  const initialImagesSet = useMemo(() => new Set(initialValue), [initialValue]);

  const getNewImages = useCallback(
    () => images.filter(image => !initialImagesSet.has(image)),
    [initialImagesSet, images]
  );

  const getPresignedUrls = useCallback(async (newImages: string[]) => {
    return GET(
      '/api/v2/profile/images/presigned-url',
      getClientSideTokens(),
      createInit(getCookie('accessToken') ?? '', { fileNames: newImages })
    );
  }, []);

  return (
    <>
      <ProfileLayout.Title>{'거의 다 왔어요!\n보틀에 담을 사진을 골라주세요'}</ProfileLayout.Title>
      <ImageInputs
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
        onClick={() => {
          /**
           * 이미지 파일들에서, 기존에 없던 이미지는 presigned url을 발급받아서 업로드하고,
           * 업로드 url로 교체하여 저장한다.
           */
          const newImages = getNewImages();
          if (newImages.length > 0) {
            getPresignedUrls(newImages).then(urls => {
              // urls를 이용해서 이미지 업로드
              console.log('URLS', urls);
            });
          }
        }}
      >
        {ctaButtonText}
      </ProfileLayout.FixedButton>
    </>
  );
}
