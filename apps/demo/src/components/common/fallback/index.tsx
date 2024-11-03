import type { ReactNode } from 'react';
import { Image } from './Image';
import { Subtitle } from './Subtitle';
import { Title } from './Title';
import { fallbackContainerStyle } from './fallbackStyle.css';

interface FallbackProps {
  marginTop?: number;
  children: ReactNode;
}

function FallbackContainer({ children, marginTop = 0 }: FallbackProps) {
  return (
    <section style={{ marginTop }} className={fallbackContainerStyle}>
      {children}
    </section>
  );
}

export const Fallback = Object.assign(FallbackContainer, {
  Image,
  Title,
  Subtitle,
});
