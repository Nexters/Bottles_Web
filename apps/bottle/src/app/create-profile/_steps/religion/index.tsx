import { Button } from '@bottlesteam/ui';
import { useState } from 'react';
import { Control, toggle } from '../../../../components/control';
import { Stepper } from '../../../../components/stepper';
import { useStep } from '../../../../features/steps/StepProvider';
import { useCreateProfileValues } from '../../CreateProfileProvider';
import { Step } from '../../../../features/steps/StepContainer';
import { religionStyle } from './religionStyle.css';

const religionList = ['무교', '기독교', '천주교', '불교', '기타'] as const;
type ReligionItem = (typeof religionList)[number];

export function Religion() {
  const { setValue } = useCreateProfileValues();
  const { onNextStep } = useStep();

  const [religion, setReligion] = useState<ReligionItem>();

  return (
    <Step>
      <Stepper current={8} max={9} />
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
    </Step>
  );
}
