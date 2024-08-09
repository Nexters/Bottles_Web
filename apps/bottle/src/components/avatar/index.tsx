import Image from 'next/image';
import type { ImageProps } from 'next/image';

export interface AvatarProps extends Omit<ImageProps, 'alt' | 'width' | 'height'> {
  size: 'sm' | 'lg';
}

export function Avatar({ size: _size, ...props }: AvatarProps) {
  const size = _size === 'sm' ? 48 : 80;
  return (
    <>
      <Image {...props} alt="user profile image" width={size} height={size} style={{ borderRadius: '50%' }} />
    </>
  );
}
