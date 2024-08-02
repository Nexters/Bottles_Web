'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface UserAgent {
  rawUA: string;
  isIOS: boolean;
  isAndroid: boolean;
}

const UserAgentContext = createContext<UserAgent | null>(null);

export function UserAgentProvider({ children }: { children: ReactNode }) {
  const [userAgent, setUserAgent] = useState<UserAgent>({ isAndroid: false, isIOS: true, rawUA: '' });

  useEffect(() => {
    const _userAgent = navigator.userAgent.toLowerCase();
    if (_userAgent.indexOf('android') > -1) {
      setUserAgent({
        isIOS: false,
        isAndroid: true,
        rawUA: _userAgent,
      });
    } else {
      setUserAgent({
        isIOS: true,
        isAndroid: false,
        rawUA: _userAgent,
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
