import { createContext, ReactNode, useContext } from 'react';
import { UserAgent } from '../web-view/UserAgentProvider';
import { convertToAndroidAppBridge, convertToIOSAppBridge } from './convertToNativeMessage';
import { AppBridgeMessage } from './interface';

interface AppBridgeProviderProps {
  userAgent: UserAgent;
  children: ReactNode;
}

interface AppBridge {
  send: (message: AppBridgeMessage) => void;
}

const AppBridgeContext = createContext<null | AppBridge>(null);

export function AppBridgeProvider({ children, userAgent }: AppBridgeProviderProps) {
  const isIOS = userAgent.isIOS;

  const send = (message: AppBridgeMessage) => {
    if (isIOS) return convertToIOSAppBridge(message);
    return convertToAndroidAppBridge(message);
  };

  return <AppBridgeContext.Provider value={{ send }}>{children}</AppBridgeContext.Provider>;
}

export function useAppBridge() {
  const appBridge = useContext(AppBridgeContext);

  return appBridge;
}
