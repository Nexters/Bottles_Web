import { profile } from './_mocks';

export interface IntroductionField {
  question: string;
  answer: string;
}

export interface Profile {
  userName: string;
  age: number;
  introduction: IntroductionField[];
  profileSelect: {
    mbti: string;
    keyword: string[];
    interest: {
      culture: string[];
      sports: string[];
      entertainment: string[];
      etc: string[];
    };
    job: string;
    smoking: string;
    alcohol: string;
    religion: string;
    region: {
      city: string;
      state: string;
    };
  };
}

export async function fetchProfile() {
  const response: Profile = await Promise.resolve(profile);

  return response;
}
