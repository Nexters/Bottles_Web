'use client';

import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { buttonStyle } from './button.css.ts';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & { asChild?: boolean; selected?: boolean } & (
    | {
        variant: 'outlined';
        size: 'sm' | 'md' | 'lg';
      }
    | {
        variant: 'solid';
        size: 'xs' | 'sm' | 'md' | 'lg';
      }
  );

export const Button = forwardRef<ElementRef<'button'>, ButtonProps>((props: ButtonProps, ref) => {
  const { children, variant, size, selected, asChild = false, className, ...rest } = props;

  const Component = asChild ? Slot : 'button';

  return (
    <Component ref={ref} className={`${buttonStyle({ variant, size, selected })} ${className}`} {...rest}>
      {children}
    </Component>
  );
});
