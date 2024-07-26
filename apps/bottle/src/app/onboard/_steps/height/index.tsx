'use client';

import { WheelPicker, colors } from '@bottlesteam/ui';
import { useState } from 'react';
import { Stepper } from '../../../../components/stepper';
import { useOnboardingValues } from '../../OnboardingProvider';
import { useStep } from '../../StepProvider';
import { Step } from '../../_step/StepContainer';
import { wheelPickerContainerStyle } from './heightStyle.css';

const OFFSET = 140;
const DEFAULT_ID = '168';

const heightData = Array.from({ length: 61 }, (_, index) => ({
  id: `${index + OFFSET}`,
  value: `${index + OFFSET}cm`,
}));

export function Height() {
  const { setValue } = useOnboardingValues();
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
          color={colors.black100}
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
