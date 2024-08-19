import { StepProvider } from '@/features/steps/StepProvider';
import type { ReactNode } from 'react';
import { CreateProfileProvider } from '../CreateProfileProvider';
import { SignupProfileProvider } from '../SignupProvider';

export default function BottleCreateProfileLayout({ children }: { children: ReactNode }) {
  return (
    <SignupProfileProvider>
      <CreateProfileProvider>
        <StepProvider maxStep={11} uri="/create-profile/bottle">
          {children}
        </StepProvider>
      </CreateProfileProvider>
    </SignupProfileProvider>
  );
}
