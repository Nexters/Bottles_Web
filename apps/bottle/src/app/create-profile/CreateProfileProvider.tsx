import { createFunnelValuesContext } from '@/features/funnel-values/createFunnelValuesContext';
import { EIType, JPType, SNType, TFType } from './_steps/MBTI';
import { AlcoholItem } from './_steps/alcohol';
import { culture, entertainment, etc, sports } from './_steps/interests/constants';
import { JobItem } from './_steps/job';
import { Keyword } from './_steps/keywords';
import { ReligionItem } from './_steps/religion';
import { SmokingItem } from './_steps/smoking';

export interface CreateProfileValues {
  mbti: `${EIType}${SNType}${TFType}${JPType}`;
  keyword: Keyword[];
  interest: {
    culture: (typeof culture)[number][];
    sports: (typeof sports)[number][];
    entertainment: (typeof entertainment)[number][];
    etc: (typeof etc)[number][];
  };
  height: number;
  job: JobItem;
  smoking: SmokingItem;
  alcohol: AlcoholItem;
  religion: ReligionItem;
  region: {
    city: string;
    state: string;
  };
  kakaoId: string;
}

export const [CreateProfileProvider, useCreateProfileValues] = createFunnelValuesContext<CreateProfileValues>();
