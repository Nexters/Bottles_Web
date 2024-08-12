import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { POST, createInit } from '@/features/server';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { Bottle } from '@/models/bottle';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { bottlesQueryOptions } from '../query/useBottlesQuery';

export function useRefuseBottleMutation() {
  const router = useRouter();
  const { send } = useAppBridge();
  const queryClient = useQueryClient();

  const tokens = getClientSideTokens();

  return useMutation({
    mutationFn: (id: Bottle['id']) => POST(`/api/v1/bottles/${id}/refuse`, tokens, createInit(tokens.accessToken)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: bottlesQueryOptions(tokens).queryKey });
      send({ type: AppBridgeMessageType.TOAST_OPEN, payload: { message: '보틀을 떠내려 보냈어요' } });
      router.back();
    },
  });
}
