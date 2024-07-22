import { ElementRef, ReactNode, forwardRef } from 'react';
import { Button } from '../../button';
import { ButtonProps } from '../../button/button';
import { rightStyle } from './variantTwoStyle.css';

export interface RightButtonProps extends Omit<ButtonProps, 'children' | 'variant' | 'size'> {
  children: ReactNode;
}

export const RightButton = forwardRef<ElementRef<'button'>, RightButtonProps>(
  ({ children, asChild }: RightButtonProps, ref) => {
    return (
      <Button ref={ref} variant="solid" size="sm" asChild={asChild} className={rightStyle}>
        {children}
      </Button>
    );
  }
);
