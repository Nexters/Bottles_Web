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
  const BASE_URL =
    process.env.NEXT_PUBLIC_MODE === 'DEVELOPMENT' ? 'http://localhost:3000' : 'https://bottle.bottles.asia';

  return `${BASE_URL}/${endpoint}?accessToken=${accessToken}&refreshToken=${refreshToken}`;
}
