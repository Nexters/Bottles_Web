import type { BottleType } from '@/app/bottles/Bottles';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { POST, createInit } from '@/features/server';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { logAction } from '@/features/server/log';
import { Bottle } from '@/models/bottle';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';
import { bottleDetailQueryOptions } from '../query/useBottleDetailQuery';
import { bottlesQueryOptions } from '../query/useBottlesQuery';
import { userInfoQueryOptions } from '../query/useUserInfoQuery';

interface AcceptBottleBody<T extends BottleType> {
  likeMessage: T extends 'random' ? string : null;
}

export function useAcceptBottleMutation<T extends BottleType>(type: T, id: Bottle['id']) {
  const { send } = useAppBridge();
  const queryClient = useQueryClient();
  const tokens = getClientSideTokens();

  async function logAcceptBottleAction() {
    const { name: currentUserName } = await queryClient.ensureQueryData(userInfoQueryOptions(tokens));
    const { userName: senderName } = await queryClient.ensureQueryData(bottleDetailQueryOptions(tokens, id));
    await logAction(`${currentUserName} ACCEPTED ${senderName}`);
  }

  return useMutation({
    mutationFn: (likeMessage: string | null) =>
      POST<AcceptBottleBody<T>>(
        `/api/v1/bottles/${id}/accept`,
        getClientSideTokens(),
        createInit(getCookie('accessToken') ?? '', { likeMessage })
      ),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: bottlesQueryOptions(getClientSideTokens()).queryKey });
      if (type === 'random' || type === 'recommendation') {
        send({ type: AppBridgeMessageType.TOAST_OPEN, payload: { message: '호감을 보냈어요' } });
        return;
      }
      await logAcceptBottleAction();
    },
  });
}
