'use client';

import { useUserAgent } from '@/features/web-view/UserAgentProvider';
import { webViewAPI } from '@/features/web-view/api';
import { Paragraph } from '@bottlesteam/ui';
import { ComponentProps } from 'react';
import { actionsStyle } from './actionsStyle.css';

export function ActionButtons() {
  const userAgent = useUserAgent();

  const handleLogoutClick = () => {
    webViewAPI({
      type: 'logout',
      payload: { iOS: { type: 'logout' } },
      userAgent,
    });
  };
  const handleDeleteUserClick = () => {
    webViewAPI({
      type: 'deleteUser',
      payload: { iOS: { type: 'deleteUser' } },
      userAgent,
    });
  };

  return (
    <section className={actionsStyle}>
      <TextButton onClick={handleLogoutClick}>
        <Paragraph typography="st2" color="neutral900" style={{ cursor: 'pointer' }}>
          로그아웃
        </Paragraph>
      </TextButton>
      <TextButton onClick={handleDeleteUserClick}>
        <Paragraph typography="st2" color="neutral900" style={{ cursor: 'pointer' }}>
          탈퇴하기
        </Paragraph>
      </TextButton>
    </section>
  );
}

function TextButton(props: ComponentProps<'button'>) {
  return (
    <button style={{ background: 'none', border: 'none' }} {...props}>
      {props.children}
    </button>
  );
}
