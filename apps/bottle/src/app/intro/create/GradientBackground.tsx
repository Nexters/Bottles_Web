import Image from 'next/image';
import Gradient from './gradient.png';

export function GradientBackground() {
  return (
    <Image
      src={Gradient}
      alt="gradient"
      objectFit="cover"
      priority
      aria-hidden
      width={776}
      height={613}
      style={{
        userSelect: 'none',
        position: 'absolute',
        top: 48,
        zIndex: 0,
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    />
  );
}
