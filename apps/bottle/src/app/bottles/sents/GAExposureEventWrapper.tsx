import { sendGAEvent } from '@next/third-parties/google';
import { ReactNode, useEffect } from 'react';
import { ABType } from './Sents';

export function GAExposureEventWrapper({ children, type }: { children: ReactNode; type: ABType }) {
  useEffect(() => {
    sendGAEvent('event', `bottle_exposed_${type}`, { value: '보틀 노출', type });
  }, [type]);
  return <div>{children}</div>;
}
