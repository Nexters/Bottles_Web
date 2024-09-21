import { Control, toggle } from '@/components/common/control';
import { Step } from '@/features/steps/StepContainer';
import { useStep } from '@/features/steps/StepProvider';
import { Smoking as SmokingType, smokingList } from '@/models/profile/smoking';
import { Button } from '@bottlesteam/ui';
import { useState } from 'react';
import { useCreateProfileValues } from '../../CreateProfileProvider';
import { smokingStyle } from './smokingStyle.css';

export function Smoking() {
  const { setValue, getValue } = useCreateProfileValues();
  const { onNextStep } = useStep();

  const [smoking, setSmoking] = useState<SmokingType | undefined>(getValue('smoking'));

  return (
    <>
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
    </>
  );
}
