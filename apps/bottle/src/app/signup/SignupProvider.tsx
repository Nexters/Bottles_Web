import { createFunnelValuesContext } from '@/features/funnelValues/createFunnelValuesContext';

export interface SignupValues {
  name: string;
  birthYear: number;
  birthMonth: number;
  birthDay: number;
  gender: 'MALE' | 'FEMALE';
  phoneNumber: string;
}

export const [SignupProvider, useSignupValues] = createFunnelValuesContext<SignupValues>();
