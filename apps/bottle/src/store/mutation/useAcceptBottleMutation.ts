import type { BottleType } from '@/app/bottles/Bottles';
import { POST, createInit } from '@/features/server';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { useUserAgent } from '@/features/web-view/UserAgentProvider';
import { webViewAPI } from '@/features/web-view/api';
import { Bottle } from '@/models/bottle';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { bottlesQueryOptions } from '../query/useBottlesQuery';

interface AcceptBottleBody<T extends BottleType> {
  likeMessage: T extends 'random' ? string : null;
}

export function useAcceptBottleMutation<T extends BottleType>(type: T, id: Bottle['id']) {
  const router = useRouter();
  const userAgent = useUserAgent();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (likeMessage: string | null) =>
      POST<AcceptBottleBody<T>>(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/bottles/${id}/accept`,
        getClientSideTokens(),
        createInit(getCookie('accessToken') ?? '', { likeMessage })
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: bottlesQueryOptions(getClientSideTokens()).queryKey });
      if (type === 'random') {
        webViewAPI({
          type: 'onToastOpen',
          payload: {
            iOS: {
              type: 'onToastOpen',
              message: '호감을 보냈어요',
            },
            android: '호감을 보냈어요',
          },
          userAgent,
        });
        router.back();
        return;
      }
      webViewAPI({
        type: 'onBottleAccept',
        payload: {
          iOS: {
            type: 'onBottleAccept',
          },
        },
        userAgent,
      });
    },
  });
}
