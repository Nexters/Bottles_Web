import { AppBridgeMessage, ToastMessage } from './interface';

export function isToastMessage(message: AppBridgeMessage): message is ToastMessage {
  return 'payload' in message && 'message' in message.payload;
}

export function hasPayload(message: AppBridgeMessage) {
  return 'payload' in message;
}
