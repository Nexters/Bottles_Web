import { Slot } from '@radix-ui/react-slot';
import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react';
import { Color } from '../../foundations/colors';
import { paragraphStyle } from './paragraph.css';

type Typography = 't1' | 't2' | 'st1' | 'st2' | 'bo' | 'ca' | 'kl';

export interface ParagraphProps extends ComponentPropsWithoutRef<'p'> {
  typography?: Typography;
  color?: Color;
  children: ReactNode;
  asChild?: boolean;
}

export const Paragraph = forwardRef<ElementRef<'p'>, ParagraphProps>(
  ({ typography, color, children, className, asChild, ...rest }: ParagraphProps, ref) => {
    const Component = asChild ? Slot : 'p';

    return (
      <Component ref={ref} className={`${paragraphStyle({ typography, color })} ${className}`} {...rest}>
        {children}
      </Component>
    );
  }
);
