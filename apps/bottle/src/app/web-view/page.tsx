'use client';

import { useUserAgent } from '@/features/user-agent/UserAgentProvider';
import { Button, Paragraph, spacings } from '@bottlesteam/ui';
import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';

export default function WebViewPage() {
  const [accessToken, setAccessToken] = useState<string>();
  const [refreshToken, setRefreshToken] = useState<string>();
  const userAgent = useUserAgent();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const _accessToken = window.localStorage.getItem('accessToken') ?? '찾을 수 없음';
    const _refreshToken = window.localStorage.getItem('refreshToken') ?? '찾을 수 없음';
    setAccessToken(_accessToken);
    setRefreshToken(_refreshToken);
  }, []);

  function closeWebView() {
    userAgent.isIOS
      ? window.webkit.messageHandlers.Native.postMessage(JSON.stringify({ type: 'onWebViewClose' }))
      : Native.onWebViewClose();

    console.log('웹뷰 끔');
  }

  function openToast() {
    const message = '토스트 오픈 테스트';
    userAgent.isIOS
      ? window.webkit.messageHandlers.Native.postMessage(JSON.stringify({ type: 'onToastOpen', message }))
      : Native.onToastOpen(JSON.stringify({ message }));

    console.log('토스트 열었음');
  }

  function login() {
    const accessToken = 'accessTokenExample';
    const refreshToken = 'refreshTokenExample';
    userAgent.isIOS
      ? window.webkit.messageHandlers.Native.postMessage(
          JSON.stringify({ type: 'onTokenSend', accessToken, refreshToken })
        )
      : Native.onToastOpen(JSON.stringify({ accessToken, refreshToken }));

    console.log('token 보냄');
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '0 16px' }}>
      <Paragraph typography="t1" style={{ marginTop: spacings.xxl, marginBottom: spacings.xxl }}>
        WebView 테스트용 페이지
      </Paragraph>

      <Paragraph typography="st2" color="purple400" style={{ marginBottom: spacings.xxs }}>
        현재 디바이스 정보:
      </Paragraph>
      <Paragraph typography="bo" style={{ marginBottom: spacings.xl }}>
        {userAgent.rawUA}
      </Paragraph>
      <Paragraph typography="t1" color="purple500" style={{ marginTop: spacings.xxl, marginBottom: spacings.sm }}>
        WebView to Native 테스트:
      </Paragraph>

      <Flex>
        <Paragraph typography="st2">onWebViewClose()</Paragraph>
        <Button variant="solid" size="sm" onClick={closeWebView}>
          웹뷰 끄기
        </Button>
      </Flex>
      <Flex>
        <Paragraph typography="st2">onToastOpen(json)</Paragraph>
        <Button variant="solid" size="sm" onClick={openToast}>
          토스트
        </Button>
      </Flex>
      <Flex>
        <Paragraph typography="st2">onTokenSend(json)</Paragraph>
        <Button variant="solid" size="sm" onClick={login}>
          로그인/회원가입 토큰 전달
        </Button>
      </Flex>
      <Paragraph typography="st1" color="purple500" style={{ marginBottom: spacings.md }}>
        <Link
          target="__blank"
          href="https://www.notion.so/teamnexters/WebView-Interface-7ec4c6f2fd2f4bfb900fbcba2d76951d?pvs=4"
        >
          자세한 인터페이스 명세 보기 {'->'}
        </Link>
      </Paragraph>

      <div>
        <Paragraph typography="t1" color="purple500" style={{ marginBottom: spacings.sm, marginTop: spacings.xxl }}>
          토큰 저장 내역:
        </Paragraph>
        <Paragraph typography="bo">accessToken: {accessToken}</Paragraph>
        <Paragraph typography="bo">refreshToken: {refreshToken}</Paragraph>
      </div>
    </div>
  );
}

function Flex({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacings.sm, marginBottom: spacings.xxl }}>
      {children}
    </div>
  );
}
