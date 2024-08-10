import { renderHook } from '@testing-library/react';
import { ReactNode } from 'react';
import { UserAgent, UserAgentContext } from '../user-agent/UserAgentProvider';
import { AppBridgeProvider, useAppBridge } from './AppBridgeProvider';
import { AppBridgeMessageType } from '.';

describe('useAppBridge', () => {
  beforeEach(() => {
    vi.stubGlobal('Native', {
      onWebViewClose: vi.fn(),
      onToastOpen: vi.fn(),
      logout: vi.fn(),
      deleteUser: vi.fn(),
      onCreateProfileComplete: vi.fn(),
      onBottleAccept: vi.fn(),
      onLogin: vi.fn(),
      onSignup: vi.fn(),
    });

    vi.stubGlobal('webkit', {
      messageHandlers: {
        Native: {
          postMessage: vi.fn(),
        },
      },
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('uses the UserAgent to decide which Native app bridge should be called', () => {
    const testUserAgent: UserAgent = {
      rawUA: '',
      isIOS: true,
      isAndroid: false,
      isMobile: true,
    };
    const { result } = renderHook(() => useAppBridge(), {
      wrapper: ({ children }: { children: ReactNode }) => (
        <UserAgentContext.Provider value={testUserAgent}>
          <AppBridgeProvider>{children}</AppBridgeProvider>
        </UserAgentContext.Provider>
      ),
    });

    result.current.send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });

    expect(window.webkit.messageHandlers.Native.postMessage).toHaveBeenCalledWith(
      JSON.stringify({ type: AppBridgeMessageType.WEB_VIEW_CLOSE })
    );
  });

  it('sends raw message when type is onToastOpen on Android environment', () => {
    const testUserAgent: UserAgent = {
      rawUA: '',
      isIOS: false,
      isAndroid: true,
      isMobile: true,
    };

    const TEST_MESSAGE = 'test message';

    const { result } = renderHook(() => useAppBridge(), {
      wrapper: ({ children }: { children: ReactNode }) => (
        <UserAgentContext.Provider value={testUserAgent}>
          <AppBridgeProvider>{children}</AppBridgeProvider>
        </UserAgentContext.Provider>
      ),
    });

    result.current.send({ type: AppBridgeMessageType.TOAST_OPEN, payload: { message: TEST_MESSAGE } });

    expect(Native.onToastOpen).toHaveBeenCalledWith(TEST_MESSAGE);
  });

  it('shows alert when neither Native app bridge is callable', () => {
    const testUserAgent: UserAgent = {
      rawUA: '',
      isIOS: false,
      isAndroid: true,
      isMobile: false,
    };

    vi.unstubAllGlobals();
    vi.stubGlobal('alert', vi.fn());

    const { result } = renderHook(() => useAppBridge(), {
      wrapper: ({ children }: { children: ReactNode }) => (
        <UserAgentContext.Provider value={testUserAgent}>
          <AppBridgeProvider>{children}</AppBridgeProvider>
        </UserAgentContext.Provider>
      ),
    });

    result.current.send({ type: AppBridgeMessageType.TOAST_OPEN, payload: { message: '?' } });

    expect(alert).toHaveBeenCalledWith('App Bridge API called: ' + AppBridgeMessageType.TOAST_OPEN);
  });
});
