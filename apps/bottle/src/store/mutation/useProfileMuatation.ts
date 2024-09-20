import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { createInit, POST } from '@/features/server';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import type { Profile } from '@/models/profile';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { currentUserProfileQueryOptions } from '../query/useMyInformation';

const ERROR_MESSAGE = '프로필 수정에 실패하였어요. 잠시 후 다시 시도해주세요.';

const mutateProfile = async (profileChoices: Profile) => {
  await POST(
    `/api/v1/profile/choice`,
    getClientSideTokens(),
    createInit(getClientSideTokens().accessToken, profileChoices)
  );
};

export function useProfileMutation() {
  const { send } = useAppBridge();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: mutateProfile,
    onError() {
      send({ type: AppBridgeMessageType.TOAST_OPEN, payload: { message: ERROR_MESSAGE } });
    },
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: currentUserProfileQueryOptions(getClientSideTokens()).queryKey });
    },
  });
}
