import { SignupValues } from '@/app/signup/SignupProvider';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { Tokens } from '@/features/server/auth';
import { STATUS } from '@/features/server/types';
import { useMutation } from '@tanstack/react-query';

export const WRONG_AUTH_CODE_MESSAGE = '올바른 번호를 입력해주세요';

export interface SignInUpResponse extends Tokens {
  hasCompleteIntroduction: boolean;
}

const signInUp = async (signupValues: Pick<SignupValues, 'authCode' | 'phoneNumber'>) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v2/auth/signup`, {
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
    throw new Error('Unhandled Error');
  }
  const tokens = await response.json();
  return tokens;
};

export function useSignInUpMutation(onAuthCodeError: () => void) {
  const { send } = useAppBridge();

  return useMutation({
    mutationFn: signInUp,
    onSuccess: (signInUpValues: SignInUpResponse) => {
      console.log('[signInUpValues:]', signInUpValues);
      send({ type: AppBridgeMessageType.LOGIN, payload: signInUpValues });
    },
    onError: error => {
      if (error instanceof Error) {
        if (error.message === WRONG_AUTH_CODE_MESSAGE) {
          onAuthCodeError();
        }
      }
    },
  });
}
