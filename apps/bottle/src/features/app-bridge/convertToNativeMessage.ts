import { AppBridgeMessageType, AppBridgeMessage } from './interface';
import { hasPayload, isToastMessage } from './utils';

/**
 * @description converts common app bridge message to iOS app bridge format
 */
export function convertToIOSAppBridge(message: AppBridgeMessage) {
  const iOSPayload = hasPayload(message) ? { type: message.type, ...message.payload } : { type: message.type };

  return window.webkit.messageHandlers.Native.postMessage(JSON.stringify(iOSPayload));
}

/**
 * @description converts common app bridge message to Android app bridge format
 */
export function convertToAndroidAppBridge(message: AppBridgeMessage) {
  if (message.type === AppBridgeMessageType.TOAST_OPEN && message.payload != null && isToastMessage(message)) {
    return Native.onToastOpen(message.payload.message);
  }

  if (hasPayload(message)) {
    return Native[message.type](JSON.stringify(message.payload));
  }

  return Native[message.type]();
}
