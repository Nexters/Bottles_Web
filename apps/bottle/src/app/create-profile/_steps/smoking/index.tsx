import { Button } from '@bottlesteam/ui';
import { useState } from 'react';
import { Control, toggle } from '../../../../components/control';
import { Stepper } from '../../../../components/stepper';
import { useStep } from '../../../../features/steps/StepProvider';
import { useCreateProfileValues } from '../../CreateProfileProvider';
import { Step } from '../../../../features/steps/StepContainer';
import { smokingStyle } from './smokingStyle.css';

const smokingList = ['전혀 피우지 않아요', '가끔 피워요', '자주 피워요'] as const;
type SmokingItem = (typeof smokingList)[number];

export function Smoking() {
  const { setValue } = useCreateProfileValues();
  const { onNextStep } = useStep();

  const [smoking, setSmoking] = useState<SmokingItem>();

  return (
    <Step>
      <Stepper current={6} max={9} />
      <Step.Title>흡연 스타일이 궁금해요</Step.Title>
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
      <Step.FixedButton
        disabled={smoking === undefined}
        onClick={() => {
          if (smoking === undefined) {
            throw new Error();
          }
          setValue('smoking', smoking);
          onNextStep();
        }}
      >
        다음
      </Step.FixedButton>
    </Step>
  );
}
