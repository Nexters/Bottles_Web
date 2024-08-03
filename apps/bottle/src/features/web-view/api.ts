import { UserAgent } from './UserAgentProvider';
import { AndroidPayload, CallType } from './interface/android';
import { IOSPayload } from './interface/iOS';

export function iOSCall(payload: IOSPayload) {
  return window.webkit.messageHandlers.Native.postMessage(JSON.stringify(payload));
}

/**
 * @example
 * androidCall('deleteUser');
 * androidCall('onToastOpen', 'toast message');
 * androidCall('onLogin', { accessToken: 'aa', refreshToken: 'bb' });
 */
export function androidCall(type: CallType, payload?: AndroidPayload) {
  return payload != null
    ? typeof payload !== 'string'
      ? Native[type](JSON.stringify(payload))
      : Native[type](payload)
    : (Native[type] as any)();
}

export function webViewAPI(
  type: CallType,
  payload: { iOS: IOSPayload; android?: AndroidPayload },
  { isIOS }: UserAgent
) {
  return isIOS ? iOSCall(payload.iOS) : androidCall(type, payload.android);
}
