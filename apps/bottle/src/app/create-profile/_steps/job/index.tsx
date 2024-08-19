import { Control, toggle } from '@/components/control';
import { Step } from '@/features/steps/StepContainer';
import { useStep } from '@/features/steps/StepProvider';
import { Job as JobType, jobList } from '@/models/profile/job';
import { Button } from '@bottlesteam/ui';
import { useState } from 'react';
import { useCreateProfileValues } from '../../CreateProfileProvider';
import { jobStyle } from './jobStyle.css';

export function Job() {
  const { setValue, getValue } = useCreateProfileValues();
  const { onNextStep } = useStep();

  const [job, setJob] = useState<JobType | undefined>(getValue('job'));
  return (
    <Step>
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
