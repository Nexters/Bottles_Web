'use client';

import LoginBackground from '@/assets/images/login-background.webp';
import { KakaoButton } from '@/components/kakao-button';
import { Asset, Paragraph, spacings } from '@bottlesteam/ui';
import Image from 'next/image';
import { useEffect } from 'react';
import { LoggerClick, LoggerMount } from './LoggerProvider';
import { LoggerProvider } from './LoggerProvider';

const JAVASCRIPT_KEY = `${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}`;
const REDIRECT_URI = `${process.env.NEXT_PUBLIC_MODE === 'DEVELOPMENT' ? 'http://localhost:3000' : 'https://demo.bottles.asia'}/kakao`;

export default function Home() {
  useEffect(() => {
    if (!Kakao?.isInitialized()) {
      Kakao.init(JAVASCRIPT_KEY); //SDK 초기화 함수
    }
  }, []);

  return (
    <LoggerProvider>
      <LoggerMount params={['event', 'kakao_login', { value: '카카오 로그인 버튼 클릭' }]}>
        <div style={{ position: 'relative', width: '100%', height: '100%', padding: `0 ${spacings.md}` }}>
          <script
            src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.3/kakao.min.js"
            integrity="sha384-kLbo2SvoNtOFiniJ1EQ9o2iDA8i3xp+O6Cns+L5cd4RsOJfl+43z5pvieT2ayq3C"
            crossOrigin="anonymous"
          />
          <Image src={LoginBackground} alt="login background" fill style={{ objectFit: 'cover' }} />
          <div
            style={{
              zIndex: 2,
              position: 'absolute',
              left: 0,
              top: 96,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: spacings.xl,
            }}
          >
            <Asset type="bottle-logo" />
            <Paragraph color="white100" typography="t2">
              {'진심을 담은 보틀로\n서로를 밀도있게 알아가요  '}
            </Paragraph>
          </div>
          <LoggerClick params={['event', 'kakao_login', { value: '카카오 로그인 버튼 클릭' }]}>
            <KakaoButton
              onClick={() => {
                Kakao.Auth.authorize({
                  redirectUri: REDIRECT_URI,
                });
              }}
            />
          </LoggerClick>
        </div>
      </LoggerMount>
    </LoggerProvider>
  );
}
