import { ReactNode } from 'react';
import { chipStyle } from './chipStyle.css';

export interface ChipProps {
  active?: boolean;
  children: ReactNode;
}

export function Chip({ active = false, children }: ChipProps) {
  return <div className={chipStyle({ active })}>{children}</div>;
}
