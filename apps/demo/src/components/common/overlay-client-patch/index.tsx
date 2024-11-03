'use client';

import { OverlayProvider } from 'overlay-kit';
import { ReactNode } from 'react';

export function OverlayClientPatch({ children }: { children: ReactNode }) {
  return <OverlayProvider>{children}</OverlayProvider>;
}
