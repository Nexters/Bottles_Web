import { getClientSideTokens } from '../server/clientSideTokens';
import { AppBridgeMessage, ToastMessage } from './interface';

export function isToastMessage(message: AppBridgeMessage): message is ToastMessage {
  return 'payload' in message && 'message' in message.payload;
}

export function hasPayload(message: AppBridgeMessage) {
  return 'payload' in message;
}

export function buildWebViewUrl(endpoint: string) {
  const { accessToken, refreshToken } = getClientSideTokens();
  return `https://bottle.bottles.asia/${endpoint}?accessToken=${accessToken}&refreshToken=${refreshToken}`;
}
