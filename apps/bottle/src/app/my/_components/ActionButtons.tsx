'use client';

import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { Paragraph } from '@bottlesteam/ui';
import { ComponentProps } from 'react';
import { actionsStyle } from './actionsStyle.css';

export function ActionButtons() {
  const { send } = useAppBridge();

  return (
    <section className={actionsStyle}>
      <TextButton onClick={() => send({ type: AppBridgeMessageType.LOGOUT })}>
        <Paragraph typography="st2" color="neutral900" style={{ cursor: 'pointer' }}>
          로그아웃
        </Paragraph>
      </TextButton>
      <TextButton onClick={() => send({ type: AppBridgeMessageType.DELETE_USER })}>
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
