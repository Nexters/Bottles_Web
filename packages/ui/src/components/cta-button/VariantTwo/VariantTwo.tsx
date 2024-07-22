import { ReactNode } from 'react';
import { LeftButton } from './LeftButton';
import { RightButton } from './RightButton';
import { containerStyle } from './variantTwoStyle.css';

export interface VariantTwoProps {
  left: ReactNode;
  right: ReactNode;
}

function VariantTwoImpl({ left, right }: VariantTwoProps) {
  return (
    <div className={containerStyle}>
      {left}
      {right}
    </div>
  );
}

export const VariantTwo = Object.assign(VariantTwoImpl, {
  Left: LeftButton,
  Right: RightButton,
});
