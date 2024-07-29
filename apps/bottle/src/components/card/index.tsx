import { ComponentProps, ReactNode } from 'react';
import { cardStyle } from './cardStyle.css';

export interface CardProps extends ComponentProps<'section'> {
  children: ReactNode;
}

export function Card({ children, ...rest }: CardProps) {
  return (
    <section className={cardStyle} {...rest}>
      {children}
    </section>
  );
}
