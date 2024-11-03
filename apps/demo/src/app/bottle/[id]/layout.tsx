import { ReactNode } from 'react';
import { HeaderArea } from './HeaderArea';

export default function BottleLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderArea />
      {children}
    </>
  );
}
