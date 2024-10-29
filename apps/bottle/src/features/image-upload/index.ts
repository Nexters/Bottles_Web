import { getCookie } from 'cookies-next';
import { GET, createInit } from '../server';
import { getClientSideTokens } from '../server/clientSideTokens';

export const getPresignedUrls = (imagesCount: number): Promise<{ presignedUrls: string[] }> =>
  GET(
    `/api/v2/profile/images/presigned-url?imageCount=${imagesCount}`,
    getClientSideTokens(),
    createInit(getCookie('accessToken') ?? '')
  );

export const base64ToBlob = (base64: string, mimeType: string) => {
  const byteString = atob(base64.split(',')[1]!);
  const byteArray = new Uint8Array(byteString.length);

  for (let i = 0; i < byteString.length; i++) {
    byteArray[i] = byteString.charCodeAt(i);
  }

  return new Blob([byteArray], { type: mimeType });
};

export const uploadImages = async (images: (string | File)[]): Promise<string[]> => {
  const urls = (await getPresignedUrls(images.length)).presignedUrls;
  await Promise.all(
    urls.map(async (presignedUrl, index) => {
      if (typeof images[index] === 'string') {
        const convertedImage = base64ToBlob(images[index], 'image/png');
        const response = await fetch(presignedUrl, {
          method: 'PUT',
          body: convertedImage,
          headers: {
            'Content-Type': 'image/png',
          },
        });
        return response;
      } else {
        const response = await fetch(presignedUrl, {
          method: 'PUT',
          body: images[index],
          headers: {
            'Content-Type': images[index]!.type,
          },
        });
        return response;
      }
    })
  );
  return urls.map(url => url.split('?')[0]!);
};
