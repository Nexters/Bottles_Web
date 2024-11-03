import { Paragraph, spacings } from '@bottlesteam/ui';
import type { ReactNode } from 'react';

export function Subtitle({ children }: { children: ReactNode }) {
  return (
    <Paragraph style={{ marginTop: spacings.xs }} color="neutral600" typography="bo">
      {children}
    </Paragraph>
  );
}
