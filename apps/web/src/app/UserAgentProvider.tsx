import { ReactNode, createContext, useEffect, useState } from 'react';

interface UserAgent {
  isIOS: boolean;
  isAndroid: boolean;
}

interface UserAgentContextT {
  userAgent: UserAgent;
}

const UserAgentContext = createContext<UserAgentContextT | null>(null);

export function UserAgentProvider({ children }: { children: ReactNode }) {
  const [userAgent, setUserAgent] = useState<UserAgent>({ isAndroid: false, isIOS: true });

  useEffect(() => {
    const _userAgent = navigator.userAgent.toLowerCase();
    if (_userAgent.indexOf('android') > -1) {
      setUserAgent({
        isIOS: false,
        isAndroid: true,
      });
    } else {
      setUserAgent({
        isIOS: true,
        isAndroid: false,
      });
    }
  }, []);

  return <UserAgentContext.Provider value={{ userAgent }}>{children}</UserAgentContext.Provider>;
}
