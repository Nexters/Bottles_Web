import { Paragraph } from '@bottlesteam/ui';
import type { ReactNode } from 'react';
import { introductionBoxStyle } from './bottleCardstyle.css';

export function IntroductionBox({ children }: { children: ReactNode }) {
  return (
    <div className={introductionBoxStyle}>
      <Paragraph color="neutral900" typography="bo">
        {children}
      </Paragraph>
    </div>
  );
}
