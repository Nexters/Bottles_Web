import { Paragraph } from '@bottlesteam/ui';
import type { ReactNode } from 'react';
import { introductionBoxStyle } from './bottleCardstyle.css';

export function IntroductionBox({ children }: { children: ReactNode }) {
  return (
    <div className={introductionBoxStyle}>
      <div
        style={{
          display: 'inline-block',
          width: '264px',
          height: '63px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }}
      >
        <Paragraph color="neutral900" typography="bo" style={{ display: 'inline-block' }}>
          {children}
        </Paragraph>
      </div>
    </div>
  );
}
