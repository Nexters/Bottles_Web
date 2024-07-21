import { ElementType, ReactNode } from 'react';
import { Color } from '../../systems/colors';
import { PolymorphicAsProp } from '../../types';
import { paragraphStyle } from './paragraph.css';

type Typography = 't1' | 't2' | 'st1' | 'st2' | 'bo' | 'ca' | 'kl';

export interface ParagraphProps<E extends ElementType> extends PolymorphicAsProp<E> {
  typography?: Typography;
  color?: Color;
  children: ReactNode;
}

export function Paragraph<E extends ElementType>({ typography, color, children, as, ...rest }: ParagraphProps<E>) {
  const Component = as ?? 'p';

  return (
    <Component className={paragraphStyle({ typography, color })} {...rest}>
      {children}
    </Component>
  );
}
