'use client';

import { Step } from '@/features/steps/StepContainer';
import { Asset } from '@bottlesteam/ui';

export default function Home() {
  return (
    <div>
      <div style={{ width: '100%', height: '200vh', display: 'flex', alignItems: 'flex-end', marginBottom: '300px' }}>
        <Asset type="icon-down" />
        <Asset type="icon-arrow-left" />
      </div>
      <Step.FixedButton
        onClick={() => {
          window.location.href = 'intent://main#Intent;scheme=bottle;package=com.team.bottles;end';
        }}
        style={{ marginBottom: '20px' }}
      >
        테스트2
      </Step.FixedButton>
    </div>
  );
}
