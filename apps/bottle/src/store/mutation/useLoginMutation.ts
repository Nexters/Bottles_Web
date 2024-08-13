import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { Tokens } from '@/features/server/auth';
import { STATUS } from '@/features/server/types';
import { useMutation } from '@tanstack/react-query';

interface LoginValues {
  phoneNumber: string;
  authCode: string;
}

export interface LoginResponse extends Tokens {
  hasCompleteIntroduction: boolean;
}

export const WRONG_AUTH_CODE_MESSAGE = '올바른 번호를 입력해주세요';
const NOT_SIGNED_UP_MESSAGE = '회원가입을 먼저 진행해주세요';

const login = async (loginValues: LoginValues) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/auth/sms/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginValues),
  });
  if (!response.ok) {
    if (response.status === STATUS.UNKNOWN) {
      throw new Error(WRONG_AUTH_CODE_MESSAGE);
    }
    if (response.status === STATUS.NOT_FOUND) {
      throw new Error(NOT_SIGNED_UP_MESSAGE);
    }

    throw new Error('Unhandled Error');
  }
  const loginResponse = await response.json();
  return loginResponse;
};

export function useLoginMutation(onAuthCodeError: () => void) {
  const { send } = useAppBridge();

  return useMutation({
    mutationFn: login,
    onSuccess: (loginResponse: LoginResponse) => {
      send({ type: AppBridgeMessageType.LOGIN, payload: loginResponse });
    },
    onError: error => {
      if (error instanceof Error) {
        if (error.message === WRONG_AUTH_CODE_MESSAGE) {
          onAuthCodeError();
          return;
        }
        send({ type: AppBridgeMessageType.TOAST_OPEN, payload: { message: error.message } });
      }
    },
  });
}
