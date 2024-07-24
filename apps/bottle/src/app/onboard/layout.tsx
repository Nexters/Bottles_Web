'use client';

import { ReactNode } from 'react';
import { OnboardingProvider } from './OnboardingProvider';
import { StepProvider } from './StepProvider';

export default function OnboardingLayout({ children }: { children: ReactNode }) {
  return (
    <OnboardingProvider>
      <StepProvider>{children}</StepProvider>
    </OnboardingProvider>
  );
}
