'use client';

import { Header } from '@/components/common/header';
import { POST } from '@/features/server';
import { Step } from '@/features/steps/StepContainer';
import { spacings, Input } from '@bottlesteam/ui';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { containerStyle, fieldStyle } from './loginStyle.css';

const ERROR_MESSAGE = '아이디 혹은 비밀번호가 틀렸어요.';

interface AdminLoginResponse {
  accessToken1: string;
  accessToken2: string;
  refreshToken1: string;
  refreshToken2: string;
}

export default function LoginPage() {
  const router = useRouter();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const handleLogin = async () => {
    if (id === process.env.NEXT_PUBLIC_ADMIN_ID_1 && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      const { accessToken1, refreshToken1 } = (await POST('/api/v1/admin/login', {
        accessToken: '',
        refreshToken: '',
      })) as AdminLoginResponse;
      setCookie('accessToken', accessToken1);
      setCookie('refreshToken', refreshToken1);
      router.push('/admin');
      return;
    }
    if (id === process.env.NEXT_PUBLIC_ADMIN_ID_2 && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      const { accessToken2, refreshToken2 } = (await POST('/api/v1/admin/login', {
        accessToken: '',
        refreshToken: '',
      })) as AdminLoginResponse;
      setCookie('accessToken', accessToken2);
      setCookie('refreshToken', refreshToken2);
      router.push('/admin');
      return;
    }
    setIsError(true);
  };

  return (
    <>
      <Header />
      <Step>
        <Step.Title style={{ marginTop: spacings.xl }}>{'인증을 진행할게요'}</Step.Title>
        <section className={containerStyle}>
          <div className={fieldStyle}>
            <Step.Subtitle>아이디</Step.Subtitle>
            <Input
              value={id}
              placeholder="아이디를 입력해 주세요"
              onChange={e => {
                setId(e.currentTarget.value);
              }}
            />
          </div>
          <div className={fieldStyle}>
            <Step.Subtitle>비밀번호</Step.Subtitle>
            <Input
              value={password}
              onChange={e => {
                setPassword(e.currentTarget.value);
              }}
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              caption={isError && <Input.Caption>{ERROR_MESSAGE}</Input.Caption>}
            />
          </div>
        </section>
        <Step.FixedButton disabled={id.trim().length === 0 || password.trim().length === 0} onClick={handleLogin}>
          로그인
        </Step.FixedButton>
      </Step>
    </>
  );
}
