import { Slot } from '@radix-ui/react-slot';
import { ComponentProps, ReactNode } from 'react';
import { cardStyle } from './cardStyle.css';

export interface CardProps extends ComponentProps<'section'> {
  children: ReactNode;
  asChild?: boolean;
}

export function Card({ children, asChild, ...rest }: CardProps) {
  const Component = asChild ? Slot : 'section';
  return (
    <Component className={cardStyle} {...rest}>
      {children}
    </Component>
  );
}
