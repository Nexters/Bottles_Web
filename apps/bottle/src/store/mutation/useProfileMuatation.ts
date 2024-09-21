import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { createInit, POST } from '@/features/server';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import type { Profile } from '@/models/profile';
import { User } from '@/models/user';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { currentUserProfileQueryOptions } from '../query/useCurrentUserProfileQuery';

type MutateProfileType = 'create' | 'edit';

const messageMap: Record<MutateProfileType, Record<'success' | 'error', string>> = {
  create: {
    success: '프로필 생성에 성공했어요.',
    error: '프로필 생성에 실패했어요. 잠시 후 다시 시도해주세요.',
  },
  edit: {
    success: '프로필 수정에 성공했어요.',
    error: '프로필 수정에 실패하였어요. 잠시 후 다시 시도해주세요.',
  },
};

export const mutateProfile = async (profileChoices: Profile & Pick<User, 'kakaoId'>) => {
  await POST(
    `/api/v1/profile/choice`,
    getClientSideTokens(),
    createInit(getClientSideTokens().accessToken, profileChoices)
  );
};

export function useProfileMutation({ type }: { type: MutateProfileType }) {
  const { send } = useAppBridge();
  const router = useRouter();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: mutateProfile,
    onError() {
      switch (type) {
        case 'create':
          send({ type: AppBridgeMessageType.TOAST_OPEN, payload: { message: messageMap.create.error } });
          break;
        case 'edit':
          send({ type: AppBridgeMessageType.TOAST_OPEN, payload: { message: messageMap.edit.error } });
          break;
      }
    },
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: currentUserProfileQueryOptions(getClientSideTokens()).queryKey });

      switch (type) {
        case 'create':
          send({ type: AppBridgeMessageType.TOAST_OPEN, payload: { message: messageMap.create.success } });
          send({ type: AppBridgeMessageType.CREATE_PROFILE_COMPLETE });
          break;
        case 'edit':
          send({ type: AppBridgeMessageType.TOAST_OPEN, payload: { message: messageMap.edit.success } });
          router.back();
          break;
      }
    },
  });
}
