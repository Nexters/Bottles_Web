import { POST, createInit } from '@/features/server';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { useMutation } from '@tanstack/react-query';

const mutateImage = (imageUrls: string[]) =>
  POST(`/api/v2/profile/images`, getClientSideTokens(), createInit(getClientSideTokens().accessToken, { imageUrls }));

export function useProfileImageMutation() {
  return useMutation({
    mutationFn: (imageUrls: string[]) => mutateImage(imageUrls),
  });
}
