import { POST, createInit } from '@/features/server';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { useUserAgent } from '@/features/web-view/UserAgentProvider';
import { webViewAPI } from '@/features/web-view/api';
import { Bottle } from '@/models/bottle';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { bottlesQueryOptions } from '../query/useBottlesQuery';

export function useRefuseBottleMutation() {
  const router = useRouter();
  const userAgent = useUserAgent();
  const queryClient = useQueryClient();
  const tokens = getClientSideTokens();

  return useMutation({
    mutationFn: (id: Bottle['id']) =>
      POST(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/bottles/${id}/refuse`,
        tokens,
        createInit(tokens.accessToken)
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: bottlesQueryOptions(tokens).queryKey });
      webViewAPI({
        type: 'onToastOpen',
        payload: { iOS: { type: 'onToastOpen', message: '보틀을 떠내려 보냈어요' }, android: '보틀을 떠내려 보냈어요' },
        userAgent,
      });
      router.back();
    },
  });
}
