import { CSSProperties, ReactNode } from 'react';
import { LeftButton } from './LeftButton';
import { RightButton } from './RightButton';
import { containerStyle } from './variantTwoStyle.css';

export interface VariantTwoProps {
  left: ReactNode;
  right: ReactNode;
  style?: CSSProperties;
}

function VariantTwoImpl({ left, right, style }: VariantTwoProps) {
  return (
    <div className={containerStyle} style={style}>
      {left}
      {right}
    </div>
  );
}

export const VariantTwo = Object.assign(VariantTwoImpl, {
  Left: LeftButton,
  Right: RightButton,
});
