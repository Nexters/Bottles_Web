'use client';

import { ReactNode, Suspense } from 'react';
import { OnboardingProvider } from './OnboardingProvider';
import { StepProvider } from './StepProvider';

export default function OnboardingLayout({ children }: { children: ReactNode }) {
  return (
    <OnboardingProvider>
      <Suspense>
        <StepProvider>{children}</StepProvider>
      </Suspense>
    </OnboardingProvider>
  );
}
