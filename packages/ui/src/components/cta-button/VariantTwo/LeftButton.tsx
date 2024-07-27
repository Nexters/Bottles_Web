import { ElementRef, ReactNode, forwardRef } from 'react';
import { Button } from '../../button';
import { ButtonProps } from '../../button/button';
import { leftStyle } from './variantTwoStyle.css';

export interface LeftButtonProps extends Omit<ButtonProps, 'children' | 'variant' | 'size'> {
  children: ReactNode;
}

export const LeftButton = forwardRef<ElementRef<'button'>, LeftButtonProps>(
  ({ children, asChild, ...rest }: LeftButtonProps, ref) => {
    return (
      <Button ref={ref} variant="outlined" size="sm" asChild={asChild} className={leftStyle} {...rest}>
        {children}
      </Button>
    );
  }
);
