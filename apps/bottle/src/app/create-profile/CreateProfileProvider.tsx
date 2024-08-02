import { createFunnelValuesContext } from '@/features/funnelValues/createFunnelValuesContext';

interface CreateProfileValues {
  mbti: string;
  keyword: string[];
  interest: {
    culture: string[];
    sports: string[];
    entertainment: string[];
    etc: string[];
  };
  height: number;
  job: string;
  smoking: string;
  alcohol: string;
  religion: string;
  region: {
    city: string;
    state: string;
  };
}

export const [CreateProfileProvider, useCreateProfileValues] = createFunnelValuesContext<CreateProfileValues>();
