import { Control, toggle } from '@/components/control';
import { Step } from '@/features/steps/StepContainer';
import { Job as JobType, jobList } from '@/models/profile/job';
import { Button } from '@bottlesteam/ui';
import { useState } from 'react';
import { BaseFunnelComponentProps } from '../types';
import { jobStyle } from './jobStyle.css';

export function Job({ initialValue, onNext, ctaButtonText = '완료' }: BaseFunnelComponentProps<JobType>) {
  const [job, setJob] = useState<JobType | undefined>(initialValue);

  return (
    <>
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
          onNext(job);
        }}
      >
        {ctaButtonText}
      </Step.FixedButton>
    </>
  );
}
