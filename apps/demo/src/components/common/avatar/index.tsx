import Image from 'next/image';
import type { ImageProps } from 'next/image';
import { avatarStyle, containerStyle, placeholderStyle } from './avatarStyle.css';

export interface AvatarProps extends Omit<ImageProps, 'alt' | 'width' | 'height'> {
  size: 'sm' | 'lg';
  /**
   * @deprecated server will process blur images
   */
  blur?: boolean;
}

export function Avatar({ size: _size, blur, ...props }: AvatarProps) {
  const size = _size === 'sm' ? 48 : 80;

  return (
    <div className={containerStyle({ size: _size })}>
      {props.src != null ? (
        <>
          <Image
            priority
            {...props}
            alt="user profile image"
            fill
            objectFit="cover"
            className={avatarStyle({ blur })}
          />
          <div
            aria-hidden
            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 2 }}
          />
        </>
      ) : (
        <Placeholder size={size} />
      )}
    </div>
  );
}

function Placeholder({ size }: { size: number }) {
  return <div style={{ width: `${size}px`, height: `${size}px` }} className={placeholderStyle} />;
}
