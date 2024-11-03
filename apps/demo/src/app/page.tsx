'use client';

import LoginBackground from '@/assets/images/login-background.webp';
import { KakaoButton } from '@/components/kakao-button';
import { Asset, Paragraph, spacings } from '@bottlesteam/ui';
import Image from 'next/image';

const CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
const REDIRECT_URI = `${process.env.NEXT_PUBLIC_MODE === 'DEVELOPMENT' ? 'http://localhost:3000' : 'https://demo.bottles.asia'}/kakao`;
const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export default function Home() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', padding: `0 ${spacings.md}` }}>
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
      <KakaoButton
        onClick={() => {
          window.location.href = kakaoLoginUrl;
        }}
      />
    </div>
  );
}
