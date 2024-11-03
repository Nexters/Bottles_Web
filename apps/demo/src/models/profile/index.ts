import { MBTI } from './MBTI';
import { Alcohol, AlcoholChipText } from './alcohol';
import { Culture, ETC, Entertainment, Sports } from './interests';
import { Job } from './job';
import { Keyword } from './keywords';
import { Religion } from './religion';
import { Smoking, SmokingChipText } from './smoking';

interface BaseProfile {
  height: number;
  interest: {
    culture: Culture[];
    entertainment: Entertainment[];
    etc: ETC[];
    sports: Sports[];
  };
  job: Job;
  keyword: Keyword[];
  mbti: MBTI;
  region: {
    city: string;
    state: string;
  };
  religion: Religion;
}

export interface Profile extends BaseProfile {
  alcohol: Alcohol;
  smoking: Smoking;
}

export interface ProfileSelect extends BaseProfile {
  alcohol: AlcoholChipText;
  smoking: SmokingChipText;
}
