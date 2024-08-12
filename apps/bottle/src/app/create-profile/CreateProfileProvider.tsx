'use client';

import { createFunnelValuesContext } from '@/features/funnel-values/createFunnelValuesContext';
import { Profile } from '@/models/profile';

export interface CreateProfileValues extends Profile {
  kakaoId: string;
}

export const [CreateProfileProvider, useCreateProfileValues] = createFunnelValuesContext<CreateProfileValues>();
