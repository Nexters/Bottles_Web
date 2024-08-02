import { ReactNode } from 'react';
import { headerStyle } from './headerStyle.css';

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return <header className={headerStyle}>{children}</header>;
}
