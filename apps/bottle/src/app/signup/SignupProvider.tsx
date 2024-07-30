import { createFunnelValuesContext } from '@/features/funnelValues/createFunnelValuesContext';

interface SignupValues {
  name: string;
  birthday: string;
  gender: 'male' | 'female';
  phoneNumber: number;
}

export const [SignupProvider, useSignupValues] = createFunnelValuesContext<SignupValues>();
