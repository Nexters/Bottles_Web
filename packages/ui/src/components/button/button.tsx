'use client';

import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react';
import { buttonStyle } from './button.css.ts';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  asChild?: boolean;
  variant: 'outlined' | 'solid';
  size: 'sm' | 'md' | 'lg';
  selected?: boolean;
}

export const Button = forwardRef<ElementRef<'button'>, ButtonProps>((props: ButtonProps, ref) => {
  const { children, variant, size, selected, asChild = false, className, ...rest } = props;

  const Component = asChild ? Slot : 'button';

  return (
    <Component ref={ref} className={`${buttonStyle({ variant, size, selected })} ${className}`} {...rest}>
      {children} fitering...2
    </Component>
  );
});
