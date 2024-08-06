'use client';

import { GET, createInit } from '@/features/server';
import { useFetch } from '@/features/server/useFetch';
import { getCookie } from 'cookies-next';
import { ActionButtons } from './_components/ActionButtons';
import { ProfileInformation } from './_components/Profile';
import { layoutStyle } from './pageStyle.css';

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

export default function MyPage() {
  const profile = useFetch(() =>
    GET<Profile>(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/profile`,
      createInit(getCookie('accessToken') ?? '')
    )
  );

  return (
    <div className={layoutStyle}>
      {profile !== undefined && <ProfileInformation profile={profile} />}
      <ActionButtons />
    </div>
  );
}
