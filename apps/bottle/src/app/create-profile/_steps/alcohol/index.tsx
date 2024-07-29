import { Button } from '@bottlesteam/ui';
import { useState } from 'react';
import { Control, toggle } from '../../../../components/control';
import { Stepper } from '../../../../components/stepper';
import { Step } from '../../../../features/steps/StepContainer';
import { useStep } from '../../../../features/steps/StepProvider';
import { useCreateProfileValues } from '../../CreateProfileProvider';
import { alcoholStyle } from './alcoholStyle.css';

const alcoholList = ['한 방울도 마시지 않아요', '때에 따라 적당히 즐겨요', '자주 찾는 편이에요'] as const;
type AlcoholItem = (typeof alcoholList)[number];

export function Alcohol() {
  const { setValue } = useCreateProfileValues();
  const { onNextStep } = useStep();

  const [alcohol, setAlcohol] = useState<AlcoholItem>();

  return (
    <Step>
      <Stepper current={7} max={9} />
      <Step.Title>술은 얼마나 즐기나요?</Step.Title>
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
      <Step.FixedButton
        disabled={alcohol === undefined}
        onClick={() => {
          if (alcohol === undefined) {
            throw new Error();
          }
          setValue('alcohol', alcohol);
          onNextStep();
        }}
      >
        다음
      </Step.FixedButton>
    </Step>
  );
}
