import { GET, createInit } from '@/features/server';
import { useEffect, useState } from 'react';

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

export function useFetchProfile() {
  const [error, setError] = useState(false);
  const [profile, setProfile] = useState<Profile>();

  useEffect(() => {
    async function fetch() {
      try {
        const data = await GET<Profile>(
          `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/profile`,
          createInit(localStorage.getItem('accessToken') ?? '')
        );
        setProfile(data);
      } catch (error) {
        setError(true);
      }
    }
    fetch();
  }, []);

  if (error) {
    throw new Error('ERROR!!');
  }

  console.log('profile', profile);
  return profile;
}
