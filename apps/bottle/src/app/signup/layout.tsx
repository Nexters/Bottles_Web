import { StepProvider } from '@/features/steps/StepProvider';
import { ReactNode, Suspense } from 'react';

export default function SignupLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense>
      <StepProvider maxStep={5} uri="/signup">
        {children}
      </StepProvider>
    </Suspense>
  );
}
