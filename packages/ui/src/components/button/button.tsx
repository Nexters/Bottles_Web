'use client';

import { Slot } from '@radix-ui/react-slot';
import { ElementRef, ReactNode, forwardRef } from 'react';
import { buttonStyle } from './button.css.ts';

type DefaultProps = {
  children: ReactNode;
  asChild?: boolean;
};

export type ButtonProps = DefaultProps & {
  variant: 'outlined' | 'solid';
  size: 'sm' | 'md' | 'lg';
};

export const Button = forwardRef<ElementRef<'button'>, ButtonProps>((props: ButtonProps, ref) => {
  const { children, variant, size, asChild = false, ...rest } = props;

  const Component = asChild ? Slot : 'button';

  return (
    <Component ref={ref} className={buttonStyle({ variant, size })} {...rest}>
      {children}
    </Component>
  );
});
