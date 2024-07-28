import { ComponentProps, ReactNode } from 'react';
import { chipStyle } from './chipStyle.css';

export interface ChipProps extends ComponentProps<'div'> {
  active?: boolean;
  children: ReactNode;
}

export function Chip({ active = false, children }: ChipProps) {
  return <div className={chipStyle({ active })}>{children}</div>;
}
