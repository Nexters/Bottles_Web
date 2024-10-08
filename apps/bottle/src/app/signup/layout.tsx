'use client';

import { StepProvider } from '@/features/steps/StepProvider';
import { ReactNode, Suspense } from 'react';
import { SignupProvider } from './SignupProvider';

export default function SignupLayout({ children }: { children: ReactNode }) {
  return (
    <SignupProvider>
      <Suspense>
        <StepProvider maxStep={3} uri="/signup">
          {children}
        </StepProvider>
      </Suspense>
    </SignupProvider>
  );
}
