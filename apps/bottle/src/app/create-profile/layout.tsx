'use client';

import { ReactNode, Suspense } from 'react';
import { CreateProfileProvider } from './CreateProfileProvider';
import { StepProvider } from '@/features/steps/StepProvider';

export default function CreateProfileLayout({ children }: { children: ReactNode }) {
  return (
    <CreateProfileProvider>
      <Suspense>
        <StepProvider maxStep={9} uri="/create-profile">
          {children}
        </StepProvider>
      </Suspense>
    </CreateProfileProvider>
  );
}
