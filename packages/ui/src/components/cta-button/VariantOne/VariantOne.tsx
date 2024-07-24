import { ElementRef, forwardRef } from 'react';
import { Button } from '../../button';
import { ButtonProps } from '../../button/button';
import { variantOneStyle, containerStyle } from './variantOneStyle.css';

export interface VariantOneProps extends Omit<ButtonProps, 'variant' | 'size' | 'className'> {
  asChild?: boolean;
}

export const VariantOne = forwardRef<ElementRef<'button'>, VariantOneProps>(
  ({ children, asChild, ...rest }: VariantOneProps, ref) => {
    return (
      <div className={containerStyle}>
        <Button {...rest} ref={ref} variant="solid" size="lg" className={variantOneStyle} asChild={asChild}>
          {children}
        </Button>
      </div>
    );
  }
);
