import { POST, createInit } from '@/features/server';
import { useUserAgent } from '@/features/web-view/UserAgentProvider';
import { webViewAPI } from '@/features/web-view/api';
import { Bottle } from '@/models/bottle';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { bottlesQueryOptions } from '../query/useBottlesQuery';

export function useRefuseBottleMutation() {
  const router = useRouter();
  const userAgent = useUserAgent();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: Bottle['id']) =>
      POST(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/bottles/${id}/refuse`,
        createInit(getCookie('accessToken') ?? '')
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: bottlesQueryOptions().queryKey });
      webViewAPI({
        type: 'onToastOpen',
        payload: { iOS: { type: 'onToastOpen', message: '보틀을 떠내려 보냈어요' }, android: '보틀을 떠내려 보냈어요' },
        userAgent,
      });
      router.back();
    },
  });
}
