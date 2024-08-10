import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { useMutation } from '@tanstack/react-query';

const UNKNOWN_ERROR_MESSAGE = '알 수 없는 오류가 발생했어요';
const CHECK_SMS_MESSAGE = '문자를 확인해주세요!';

const sendAuthCode = async (phoneNumber: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/auth/sms/send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      phoneNumber,
    }),
  });
  if (!response.ok) {
    throw new Error(UNKNOWN_ERROR_MESSAGE);
  }
};

export function useSendAuthCodeMutation(onSendSuccess: () => void) {
  const { send } = useAppBridge();

  return useMutation({
    mutationFn: sendAuthCode,
    onSuccess: () => {
      onSendSuccess();
      send({ type: AppBridgeMessageType.TOAST_OPEN, payload: { message: CHECK_SMS_MESSAGE } });
    },
    onError: error => {
      if (error instanceof Error) {
        send({ type: AppBridgeMessageType.TOAST_OPEN, payload: { message: error.message } });
      }
    },
  });
}
