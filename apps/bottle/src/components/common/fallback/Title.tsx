import { Paragraph, spacings } from '@bottlesteam/ui';
import type { ReactNode } from 'react';

export function Title({ children }: { children: ReactNode }) {
  return (
    <Paragraph typography="st1" style={{ marginTop: spacings.xl }}>
      {children}
    </Paragraph>
  );
}
