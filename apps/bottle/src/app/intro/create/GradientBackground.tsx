import Image from 'next/image';
import Gradient from './gradient.png';

export function GradientBackground() {
  return (
    <div
      style={{
        width: 776,
        height: 613,
        userSelect: 'none',
        position: 'absolute',
        top: 48,
        zIndex: 0,
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <Image src={Gradient} alt="gradient" priority fill aria-hidden />
    </div>
  );
}
