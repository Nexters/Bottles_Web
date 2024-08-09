import { ComponentProps, ReactNode } from 'react';
import { Asset } from '../asset';
import { messageContainerstyle, vectorContainerStyle, wrapperStyle } from './bubbleStyle.css';

export interface BubbleProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export function Bubble({ children, ...props }: BubbleProps) {
  return (
    <div className={wrapperStyle} {...props}>
      <div className={messageContainerstyle}>{children}</div>
      <div className={vectorContainerStyle}>
        <Asset type="vector" />
      </div>
    </div>
  );
}
