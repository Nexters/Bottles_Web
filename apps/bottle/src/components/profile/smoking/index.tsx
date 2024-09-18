'use client';

import { Control, toggle } from '@/components/common/control';
import { Smoking as SmokingType, smokingList } from '@/models/profile/smoking';
import { Button } from '@bottlesteam/ui';
import { useState } from 'react';
import { ProfileLayout } from '../layout';
import { BaseProfileComponentProps } from '../types';
import { smokingStyle } from './smokingStyle.css';

export function Smoking({ initialValue, onNext, ctaButtonText = '완료' }: BaseProfileComponentProps<SmokingType>) {
  const [smoking, setSmoking] = useState<SmokingType | undefined>(initialValue);

  return (
    <>
      <ProfileLayout.Title>흡연 스타일이 궁금해요</ProfileLayout.Title>
      <Control value={smoking}>
        <section className={smokingStyle}>
          {smokingList.map((item, index) => (
            <Control.Item key={index} value={item} onClick={() => setSmoking(prev => toggle(prev, item))}>
              <Button variant="outlined" size="md" style={{ width: '100%' }}>
                {item}
              </Button>
            </Control.Item>
          ))}
        </section>
      </Control>
      <ProfileLayout.FixedButton
        disabled={smoking === undefined}
        onClick={() => {
          if (smoking === undefined) {
            throw new Error();
          }
          onNext(smoking);
        }}
      >
        {ctaButtonText}
      </ProfileLayout.FixedButton>
    </>
  );
}
