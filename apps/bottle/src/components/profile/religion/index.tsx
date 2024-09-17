import { Control, toggle } from '@/components/common/control';
import { Step } from '@/features/steps/StepContainer';
import { Religion as ReligionType, religionList } from '@/models/profile/religion';
import { Button } from '@bottlesteam/ui';
import { useState } from 'react';
import { BaseProfileComponentProps } from '../types';
import { religionStyle } from './religionStyle.css';

export function Religion({ onNext, initialValue, ctaButtonText = '완료' }: BaseProfileComponentProps<ReligionType>) {
  const [religion, setReligion] = useState<ReligionType | undefined>(initialValue);

  return (
    <>
      <Step.Title>어떤 종교를 가지고 있나요?</Step.Title>
      <section className={religionStyle}>
        <Control value={religion}>
          {religionList.map((item, index) => (
            <Control.Item key={index} value={item} onClick={() => setReligion(prev => toggle(prev, item))}>
              <Button variant="outlined" size="md" style={{ width: 'auto' }}>
                {item}
              </Button>
            </Control.Item>
          ))}
        </Control>
      </section>
      <Step.FixedButton
        disabled={religion === undefined}
        onClick={() => {
          if (religion === undefined) {
            return;
          }
          onNext(religion);
        }}
      >
        {ctaButtonText}
      </Step.FixedButton>
    </>
  );
}
