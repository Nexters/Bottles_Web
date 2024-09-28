import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { createInit, POST } from '@/features/server';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { Introduction } from '@/models/introduction';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { currentUserProfileQueryOptions } from '../query/useCurrentUserProfileQuery';

type MutateIntroductionType = 'create' | 'edit';

const messageMap: Record<'edit', Record<'success' | 'error', string>> = {
  edit: {
    success: '자기소개 수정에 성공했어요.',
    error: '자기소개 수정에 실패하였어요. 잠시 후 다시 시도해주세요.',
  },
};

export function useIntroductionMutation({ type }: { type: MutateIntroductionType }) {
  const { send } = useAppBridge();
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (introduction: Introduction) =>
      POST(
        '/api/v1/profile/introduction',
        getClientSideTokens(),
        createInit(getCookie('accessToken') ?? '', { introduction })
      ),
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: currentUserProfileQueryOptions(getClientSideTokens()).queryKey });
      if (type === 'edit') {
        send({ type: AppBridgeMessageType.TOAST_OPEN, payload: { message: messageMap.edit.success } });
        router.back();
        return;
      }
    },
    onError() {
      if (type === 'edit') {
        send({ type: AppBridgeMessageType.TOAST_OPEN, payload: { message: messageMap.edit.error } });
        return;
      }
    },
  });
}
