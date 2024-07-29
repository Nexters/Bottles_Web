'use client';

import { WheelPicker, colors } from '@bottlesteam/ui';
import { useState } from 'react';
import { useCreateProfileValues } from '../../CreateProfileProvider';
import { wheelPickerContainerStyle } from './heightStyle.css';
import { Stepper } from '@/components/stepper';
import { Step } from '@/features/steps/StepContainer';
import { useStep } from '@/features/steps/StepProvider';

const OFFSET = 140;
const DEFAULT_ID = '168';

const heightData = Array.from({ length: 61 }, (_, index) => ({
  id: `${index + OFFSET}`,
  value: `${index + OFFSET}cm`,
}));

export function Height() {
  const { setValue } = useCreateProfileValues();
  const { onNextStep } = useStep();
  const [height, setHeight] = useState(Number(DEFAULT_ID));

  return (
    <Step>
      <Stepper current={5} max={9} />
      <Step.Title>키는 어떻게 되나요?</Step.Title>
      <div className={wheelPickerContainerStyle}>
        <WheelPicker
          data={heightData}
          onChange={({ id }) => setHeight(Number(id))}
          selectedID={DEFAULT_ID}
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
          setValue('height', height);
          onNextStep();
        }}
      >
        다음
      </Step.FixedButton>
    </Step>
  );
}
