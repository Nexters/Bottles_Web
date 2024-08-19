import { SignupProfileValues } from '@/app/create-profile/SignupProvider';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { createInit, POST } from '@/features/server';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { useMutation } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';

export const HAS_SIGNED_UP_MESSAGE = '이미 가입하셨나요? 로그인해주세요';

const signupProfile = async (signupProfileValues: SignupProfileValues) => {
  await POST(
    `/api/v2/auth/profile`,
    getClientSideTokens(),
    createInit(getCookie('accessToken') ?? '', { ...signupProfileValues })
  );
};

export function useSignupProfileMutation() {
  const { send } = useAppBridge();

  return useMutation({
    mutationFn: signupProfile,
    onError: error => {
      if (error instanceof Error) {
        if (error.message === HAS_SIGNED_UP_MESSAGE) {
          send({ type: AppBridgeMessageType.TOAST_OPEN, payload: { message: HAS_SIGNED_UP_MESSAGE } });
        }
      }
    },
  });
}
