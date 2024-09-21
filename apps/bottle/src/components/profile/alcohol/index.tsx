'use client';

import { Control, toggle } from '@/components/common/control';
import { Alcohol as AlcoholType, alcoholList } from '@/models/profile/alcohol';
import { Button } from '@bottlesteam/ui';
import { useState } from 'react';
import { ProfileLayout } from '../layout';
import { BaseProfileComponentProps } from '../types';
import { alcoholStyle } from './alcoholStyle.css';

export function Alcohol({ initialValue, onNext, ctaButtonText = '완료' }: BaseProfileComponentProps<AlcoholType>) {
  const [alcohol, setAlcohol] = useState<AlcoholType | undefined>(initialValue);

  return (
    <>
      <ProfileLayout.Title>술은 얼마나 즐기나요?</ProfileLayout.Title>
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
      <ProfileLayout.FixedButton
        disabled={alcohol === undefined}
        onClick={() => {
          if (alcohol === undefined) {
            throw new Error();
          }
          onNext(alcohol);
        }}
      >
        {ctaButtonText}
      </ProfileLayout.FixedButton>
    </>
  );
}
