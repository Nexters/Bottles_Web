import { Control, toggle } from '@/components/common/control';
import { Step } from '@/features/steps/StepContainer';
import { useStep } from '@/features/steps/StepProvider';
import { Religion as ReligionType, religionList } from '@/models/profile/religion';
import { Button } from '@bottlesteam/ui';
import { useState } from 'react';
import { useCreateProfileValues } from '../../CreateProfileProvider';
import { religionStyle } from './religionStyle.css';

export function Religion() {
  const { setValue, getValue } = useCreateProfileValues();
  const { onNextStep } = useStep();

  const [religion, setReligion] = useState<ReligionType | undefined>(getValue('religion'));

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
          setValue('religion', religion);
          onNextStep();
        }}
      >
        다음
      </Step.FixedButton>
    </>
  );
}
