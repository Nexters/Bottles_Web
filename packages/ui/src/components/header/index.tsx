import { ReactNode } from 'react';
import { Asset } from '../asset';
import { headerStyle } from './headerStyle.css';

export interface HeaderProps {
  children?: ReactNode;
  onGoBack?: () => void;
}

export function Header({ children, onGoBack }: HeaderProps) {
  return (
    <header className={headerStyle}>
      {onGoBack != null && (
        <button style={{ background: 'none', border: 'none' }}>
          <Asset onClick={onGoBack} type="icon-arrow-left" aria-label="go-back-icon" />
        </button>
      )}
      {children}
    </header>
  );
}
