import { Control, toggle } from '@/components/control';
import { Step } from '@/features/steps/StepContainer';
import { Alcohol as AlcoholType, alcoholList } from '@/models/profile/alcohol';
import { Button } from '@bottlesteam/ui';
import { useState } from 'react';
import { BaseFunnelComponentProps } from '../types';
import { alcoholStyle } from './alcoholStyle.css';

export function Alcohol({ initialValue, onNext, ctaButtonText = '완료' }: BaseFunnelComponentProps<AlcoholType>) {
  const [alcohol, setAlcohol] = useState<AlcoholType | undefined>(initialValue);

  return (
    <>
      <Step.Title>술은 얼마나 즐기나요?</Step.Title>
      <Control value={alcohol}>
        <section className={alcoholStyle}>
          {alcoholList.map((item, index) => (
            <Control.Item key={index} value={item} onClick={() => setAlcohol(prev => toggle(prev, item))}>
              <Button variant="outlined" size="md" style={{ width: '100%' }}>
                {item}
              </Button>
            </Control.Item>
          ))}
        </section>
      </Control>
      <Step.FixedButton
        disabled={alcohol === undefined}
        onClick={() => {
          if (alcohol === undefined) {
            throw new Error();
          }
          onNext(alcohol);
        }}
      >
        {ctaButtonText}
      </Step.FixedButton>
    </>
  );
}
