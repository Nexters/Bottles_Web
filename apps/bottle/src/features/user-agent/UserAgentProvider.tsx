'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

export interface UserAgent {
  rawUA: string;
  isIOS: boolean;
  isAndroid: boolean;
  isMobile: boolean;
}

export const UserAgentContext = createContext<UserAgent | null>(null);

export function UserAgentProvider({ children }: { children: ReactNode }) {
  const [userAgent, setUserAgent] = useState<UserAgent>({ isAndroid: false, isIOS: true, rawUA: '', isMobile: true });

  useEffect(() => {
    const _userAgent = navigator.userAgent.toLowerCase();

    const isMobile = _userAgent.indexOf('iphone') > -1 || _userAgent.indexOf('android') > -1;

    if (_userAgent.indexOf('android') > -1) {
      setUserAgent({
        isIOS: false,
        isAndroid: true,
        rawUA: _userAgent,
        isMobile,
      });
    } else {
      setUserAgent({
        isIOS: true,
        isAndroid: false,
        rawUA: _userAgent,
        isMobile,
      });
    }
  }, []);

  return <UserAgentContext.Provider value={userAgent}>{children}</UserAgentContext.Provider>;
}

export function useUserAgent() {
  const userAgent = useContext(UserAgentContext);

  if (userAgent == null) {
    throw new Error('Wrap UserAgent Provider');
  }
  return userAgent;
}
