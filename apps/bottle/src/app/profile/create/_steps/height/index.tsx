'use client';

import { Step } from '@/features/steps/StepContainer';
import { WheelPicker, colors } from '@bottlesteam/ui';
import { useState } from 'react';
import { BaseFunnelComponentProps } from '../types';
import { wheelPickerContainerStyle } from './heightStyle.css';

const OFFSET = 140;
const DEFAULT_ID = '168';

const heightData = Array.from({ length: 61 }, (_, index) => ({
  id: `${index + OFFSET}`,
  value: `${index + OFFSET}cm`,
}));

export function Height({ initialValue, onNext, ctaButtonText = '완료' }: BaseFunnelComponentProps<number>) {
  const [height, setHeight] = useState(initialValue ?? Number(DEFAULT_ID));

  return (
    <>
      <Step.Title>키는 어떻게 되나요?</Step.Title>
      <div className={wheelPickerContainerStyle}>
        <WheelPicker
          data={heightData}
          onChange={({ id }) => setHeight(Number(id))}
          selectedID={String(height)}
          fontSize={14}
          height={250}
          width={'100%'}
          itemHeight={56}
          shadowColor="none"
          activeColor={colors.neutral900}
          color={colors.neutral600}
        />
      </div>
      <Step.FixedButton
        onClick={() => {
          onNext(height);
        }}
      >
        {ctaButtonText}
      </Step.FixedButton>
    </>
  );
}
