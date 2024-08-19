import { GET, createInit } from '@/features/server';
import { Tokens } from '@/features/server/auth';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { UseSuspenseQueryOptions, useSuspenseQuery } from '@tanstack/react-query';

export enum SignInUpState {
  /**
   * the user has not yet set his name, age, gender
   */
  SIGN_UP_SMS_FINISHED = 'SIGN_UP_SMS_FINISHED',
  /**
   * the user has set his name, age, gender
   */
  SIGN_UP_NAME_GENDER_AGE_FINISHED = 'SIGN_UP_NAME_GENDER_AGE_FINISHED',
}

export interface GetUserInfoData {
  name: string;
  signInUpStep: SignInUpState;
}

export const userInfoQueryOptions = (tokens: Tokens): UseSuspenseQueryOptions<GetUserInfoData> => ({
  queryKey: ['userInfo'],
  queryFn: () => GET<GetUserInfoData>(`/api/v1/profile/info`, tokens, createInit(tokens.accessToken)),
});
export function useUserInfoQuery() {
  return useSuspenseQuery(userInfoQueryOptions(getClientSideTokens()));
}
