import Image from 'next/image';
import type { ImageProps } from 'next/image';
import { avatarStyle, placeholderStyle } from './avatarStyle.css';

export interface AvatarProps extends Omit<ImageProps, 'alt' | 'width' | 'height'> {
  size: 'sm' | 'lg';
  blur?: boolean;
}

export function Avatar({ size: _size, blur, ...props }: AvatarProps) {
  const size = _size === 'sm' ? 48 : 80;

  return (
    <>
      {props.src != null ? (
        <Image {...props} alt="user profile image" width={size} height={size} className={avatarStyle({ blur })} />
      ) : (
        <Placeholder size={size} />
      )}
    </>
  );
}

function Placeholder({ size }: { size: number }) {
  return <div style={{ width: `${size}px`, height: `${size}px` }} className={placeholderStyle} />;
}
