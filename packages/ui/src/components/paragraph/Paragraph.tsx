import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Color } from '../../foundations/colors';
import { paragraphStyle } from './paragraph.css';

type Typography = 't1' | 't2' | 'st1' | 'st2' | 'bo' | 'ca' | 'kl';

export interface ParagraphProps extends ComponentPropsWithoutRef<'p'> {
  typography?: Typography;
  color?: Color;
  children: ReactNode;
  asChild?: boolean;
}

export function Paragraph({ typography, color, children, className, asChild, ...rest }: ParagraphProps) {
  const Component = asChild ? Slot : 'p';

  return (
    <Component className={`${paragraphStyle({ typography, color })} ${className}`} {...rest}>
      {children}
    </Component>
  );
}
