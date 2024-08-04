'use client';

import { StepProvider } from '@/features/steps/StepProvider';
import { useUserAgent } from '@/features/web-view/UserAgentProvider';
import { webViewAPI } from '@/features/web-view/api';
import { ReactNode, Suspense } from 'react';
import { CreateProfileProvider } from './CreateProfileProvider';

export default function CreateProfileLayout({ children }: { children: ReactNode }) {
  const userAgent = useUserAgent();

  return (
    <CreateProfileProvider>
      <Suspense>
        <StepProvider
          maxStep={10}
          uri="/create-profile"
          onExit={() => webViewAPI({ type: 'onWebViewClose', payload: { iOS: { type: 'onWebViewClose' } }, userAgent })}
        >
          {children}
        </StepProvider>
      </Suspense>
    </CreateProfileProvider>
  );
}
