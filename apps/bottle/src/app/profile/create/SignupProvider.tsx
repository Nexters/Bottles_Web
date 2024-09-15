'use client';

import { createFunnelValuesContext } from '@/features/funnel-values/createFunnelValuesContext';

export interface SignupProfileValues {
  birthDay: number;
  birthMonth: number;
  birthYear: number;
  gender: 'MALE' | 'FEMALE';
  name: string;
}

export const [SignupProfileProvider, useSignupProfileValues] = createFunnelValuesContext<SignupProfileValues>();
