import { ReactNode } from 'react';
import { Color } from '../../foundations';
import { captionStyle } from './captionStyle.css';

interface CaptionProps {
  color?: Color;
  children: ReactNode;
}

export function Caption({ color = 'red', children }: CaptionProps) {
  return <p className={captionStyle({ color })}>{children}</p>;
}
