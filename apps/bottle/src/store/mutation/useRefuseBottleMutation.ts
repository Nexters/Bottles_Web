import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { POST, createInit } from '@/features/server';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { logAction } from '@/features/server/log';
import { Bottle } from '@/models/bottle';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { bottleDetailQueryOptions } from '../query/useBottleDetailQuery';
import { bottlesQueryOptions } from '../query/useBottlesQuery';
import { userInfoQueryOptions } from '../query/useUserInfoQuery';

export function useRefuseBottleMutation(id: Bottle['id']) {
  const { send } = useAppBridge();
  const queryClient = useQueryClient();

  const tokens = getClientSideTokens();

  async function logRefuseBottleAction() {
    const { name: currentUserName } = await queryClient.ensureQueryData(userInfoQueryOptions(tokens));
    const { userName: senderName } = await queryClient.ensureQueryData(bottleDetailQueryOptions(tokens, id));
    await logAction(`${currentUserName} REFUSED ${senderName}`);
  }

  return useMutation({
    mutationFn: () => POST(`/api/v1/bottles/${id}/refuse`, tokens, createInit(tokens.accessToken)),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: bottlesQueryOptions(tokens).queryKey });
      send({ type: AppBridgeMessageType.TOAST_OPEN, payload: { message: '보틀을 떠내려 보냈어요' } });
      await logRefuseBottleAction();
    },
  });
}
