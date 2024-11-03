import NextImage, { ImageProps as NextImageProps } from 'next/image';

export function Image(props: Omit<NextImageProps, 'width' | 'height' | 'className'>) {
  return <NextImage {...props} width={180} height={180} />;
}
