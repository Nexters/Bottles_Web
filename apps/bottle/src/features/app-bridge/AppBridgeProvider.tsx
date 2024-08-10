'use client';

import { createContext, ReactNode, useContext } from 'react';
import { useUserAgent } from '../user-agent/UserAgentProvider';
import { convertToAndroidAppBridge, convertToIOSAppBridge } from './convertToNativeMessage';
import { AppBridgeMessage } from './interface';

interface AppBridgeProviderProps {
  children: ReactNode;
}

interface AppBridge {
  send: (message: AppBridgeMessage) => void;
}

const AppBridgeContext = createContext<null | AppBridge>(null);

export function AppBridgeProvider({ children }: AppBridgeProviderProps) {
  const userAgent = useUserAgent();

  const isIOS = userAgent.isIOS;

  const send = (message: AppBridgeMessage) => {
    try {
      if (isIOS) return convertToIOSAppBridge(message);
      return convertToAndroidAppBridge(message);
    } catch (error) {
      alert('App Bridge API called: ' + message.type);
    }
  };

  return <AppBridgeContext.Provider value={{ send }}>{children}</AppBridgeContext.Provider>;
}

export function useAppBridge() {
  const appBridge = useContext(AppBridgeContext);

  if (appBridge == null) {
    throw new Error('Wrap App Bridge Provider');
  }

  return appBridge;
}
