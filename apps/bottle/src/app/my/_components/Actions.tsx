'use client';

import { Paragraph } from '@bottlesteam/ui';
import { actionsStyle } from './actionsStyle.css';

export function Actions() {
  return (
    <section className={actionsStyle}>
      <Paragraph typography="st2" color="neutral900" style={{ cursor: 'pointer' }}>
        로그아웃
      </Paragraph>
      <Paragraph typography="st2" color="neutral900" style={{ cursor: 'pointer' }}>
        탈퇴하기
      </Paragraph>
    </section>
  );
}
