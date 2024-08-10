import { SignupValues } from '@/app/signup/SignupProvider';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { Tokens } from '@/features/server/auth';
import { STATUS } from '@/features/server/types';
import { useMutation } from '@tanstack/react-query';

export const WRONG_AUTH_CODE_MESSAGE = '올바른 번호를 입력해주세요';
export const HAS_SIGNED_UP_MESSAGE = '이미 가입하셨나요? 로그인해주세요';

const signup = async (signupValues: SignupValues) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signupValues),
  });
  if (!response.ok) {
    if (response.status === STATUS.UNKNOWN) {
      throw new Error(WRONG_AUTH_CODE_MESSAGE);
    }
    if (response.status === STATUS.DUPLICATE) {
      throw new Error(HAS_SIGNED_UP_MESSAGE);
    }
    throw new Error('Unhandled Error');
  }
  const tokens = await response.json();
  return tokens;
};

export function useSignupMutation(onAuthCodeError: () => void) {
  const { send } = useAppBridge();

  return useMutation({
    mutationFn: signup,
    onSuccess: (tokens: Tokens) => {
      console.log('tokens', tokens);
      send({ type: AppBridgeMessageType.SIGNUP, payload: tokens });
    },
    onError: error => {
      if (error instanceof Error) {
        if (error.message === WRONG_AUTH_CODE_MESSAGE) {
          onAuthCodeError();
        }
        if (error.message === HAS_SIGNED_UP_MESSAGE) {
          send({ type: AppBridgeMessageType.TOAST_OPEN, payload: { message: HAS_SIGNED_UP_MESSAGE } });
        }
      }
    },
  });
}
