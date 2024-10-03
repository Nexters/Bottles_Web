import { Paragraph, typography } from '@bottlesteam/ui';
import type { ReactNode } from 'react';
import { introductionBoxStyle } from './bottleCardstyle.css';

export function IntroductionBox({ children }: { children: ReactNode }) {
  return (
    <div className={introductionBoxStyle}>
      <Paragraph
        typography="bo"
        color="neutral900"
        style={{
          height: '63px',
          overflow: 'hidden',
          wordBreak: 'break-all',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 3,
        }}
      >
        {children}
      </Paragraph>
    </div>
  );
}
