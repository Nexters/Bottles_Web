import { StepProvider } from '@/features/steps/StepProvider';
import type { ReactNode } from 'react';
import { CreateProfileProvider } from '../CreateProfileProvider';

export default function KakaoCreateProfileLayout({ children }: { children: ReactNode }) {
  return (
    <CreateProfileProvider>
      <StepProvider maxStep={10} uri="/create-profile/kakao">
        {children}
      </StepProvider>
    </CreateProfileProvider>
  );
}
