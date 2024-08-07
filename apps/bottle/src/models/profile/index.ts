import { MBTI } from './MBTI';
import { Alcohol } from './alcohol';
import { Culture, ETC, Entertainment, Sports } from './interests';
import { Job } from './job';
import { Keyword } from './keywords';
import { Religion } from './religion';
import { Smoking } from './smoking';

export interface Profile {
  alcohol: Alcohol;
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
  smoking: Smoking;
}
