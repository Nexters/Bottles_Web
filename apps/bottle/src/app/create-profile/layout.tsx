'use client';

import { ReactNode, Suspense } from 'react';
import { CreateProfileProvider } from './CreateProfileProvider';
import { StepProvider } from './StepProvider';

export default function CreateProfileLayout({ children }: { children: ReactNode }) {
  return (
    <CreateProfileProvider>
      <Suspense>
        <StepProvider>{children}</StepProvider>
      </Suspense>
    </CreateProfileProvider>
  );
}
