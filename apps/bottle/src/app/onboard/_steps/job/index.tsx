import { Button, ButtonProps } from '@bottlesteam/ui';
import { useState } from 'react';
import { Control, toggle } from '../../../../components/control';
import { Stepper } from '../../../../components/stepper';
import { useOnboardingValues } from '../../OnboardingProvider';
import { useStep } from '../../StepProvider';
import { Step } from '../../_step/StepContainer';
import { jobStyle } from './jobStyle.css';

const jobList = ['대학생 · 대학원생', '직장인', '프리랜서', '자영업', '취준생 · 무직'] as const;
type JobItem = (typeof jobList)[number];

export function Job() {
  const { setValue } = useOnboardingValues();
  const { onNextStep } = useStep();

  const [job, setJob] = useState<JobItem>();
  return (
    <Step>
      <Stepper current={4} max={9} />
      <Step.Title>지금 어떤 일을 하고 있나요?</Step.Title>
      <section className={jobStyle}>
        <Control value={job}>
          {jobList.map((item, index) => (
            <Control.Item key={index} value={item} onClick={() => setJob(prev => toggle(prev, item))}>
              <ItemButton>{item}</ItemButton>
            </Control.Item>
          ))}
        </Control>
      </section>
      <Step.FixedButton
        disabled={job === undefined}
        onClick={() => {
          if (job === undefined) {
            throw new Error();
          }
          setValue('job', job);
          onNextStep();
        }}
      >
        다음
      </Step.FixedButton>
    </Step>
  );
}

function ItemButton(props: Omit<ButtonProps, 'variant' | 'size'>) {
  return (
    <Button variant="outlined" size="md" selected={props.selected} {...props} style={{ width: 'auto' }}>
      {props.children}
    </Button>
  );
}
