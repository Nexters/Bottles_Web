import { Button } from '@bottlesteam/ui';
import { useState } from 'react';
import { useCreateProfileValues } from '../../CreateProfileProvider';
import { jobStyle } from './jobStyle.css';
import { Control, toggle } from '@/components/control';
import { Stepper } from '@/components/stepper';
import { Step } from '@/features/steps/StepContainer';
import { useStep } from '@/features/steps/StepProvider';

const jobList = ['대학생 · 대학원생', '직장인', '프리랜서', '자영업', '취준생 · 무직'] as const;
type JobItem = (typeof jobList)[number];

export function Job() {
  const { setValue } = useCreateProfileValues();
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
              <Button variant="outlined" size="md" style={{ width: 'auto' }}>
                {item}
              </Button>
            </Control.Item>
          ))}
        </Control>
      </section>
      <Step.FixedButton
        disabled={job === undefined}
        onClick={() => {
          if (job === undefined) {
            return;
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
