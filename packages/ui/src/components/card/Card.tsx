import { ComponentProps, ReactNode } from 'react';
import { wrapperStyle } from './cardStyle.css';

export interface CardProps extends ComponentProps<'div'> {
  children: ReactNode | ReactNode[];
}

export function Card({ children, ...rest }: CardProps) {
  return (
    <div className={wrapperStyle} {...rest}>
      {children}
    </div>
  );
}
