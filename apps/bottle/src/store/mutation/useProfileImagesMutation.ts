import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { POST, createInit } from '@/features/server';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { currentUserProfileQueryOptions } from '../query/useCurrentUserProfileQuery';

type MutateProfileImagesType = 'create' | 'edit';

const messageMap: Record<MutateProfileImagesType, Record<'success' | 'error', string>> = {
  create: {
    success: '프로필 사진 등록에 성공했어요.',
    error: '프로필 사진 등록에 실패했어요. 잠시 후 다시 시도해주세요.',
  },
  edit: {
    success: '프로필 사진 수정에 성공했어요.',
    error: '프로필 사진 수정에 실패하였어요. 잠시 후 다시 시도해주세요.',
  },
};

const mutateImages = (imageUrls: string[]) =>
  POST(`/api/v2/profile/images`, getClientSideTokens(), createInit(getClientSideTokens().accessToken, { imageUrls }));

export function useProfileImagesMutation({ type }: { type: MutateProfileImagesType }) {
  const queryClient = useQueryClient();
  const { send } = useAppBridge();

  return useMutation({
    mutationFn: (imageUrls: string[]) => mutateImages(imageUrls),
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: currentUserProfileQueryOptions(getClientSideTokens()).queryKey });

      switch (type) {
        case 'create':
          send({ type: AppBridgeMessageType.TOAST_OPEN, payload: { message: messageMap.create.success } });
          break;
        case 'edit':
          send({ type: AppBridgeMessageType.TOAST_OPEN, payload: { message: messageMap.edit.success } });
          break;
      }
    },
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
  });
}
