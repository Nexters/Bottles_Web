import { createFunnelValuesContext } from '@/features/funnel-values/createFunnelValuesContext';

export interface SignupValues {
  authCode: string;
  birthDay: number;
  birthMonth: number;
  birthYear: number;
  gender: 'MALE' | 'FEMALE';
  name: string;
  phoneNumber: string;
}

export const [SignupProvider, useSignupValues] = createFunnelValuesContext<SignupValues>();
