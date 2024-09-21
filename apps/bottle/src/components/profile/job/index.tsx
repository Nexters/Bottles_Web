import { Control, toggle } from '@/components/common/control';
import { Job as JobType, jobList } from '@/models/profile/job';
import { Button } from '@bottlesteam/ui';
import { useState } from 'react';
import { ProfileLayout } from '../layout';
import { BaseProfileComponentProps } from '../types';
import { jobStyle } from './jobStyle.css';

export function Job({ initialValue, onNext, ctaButtonText = '완료' }: BaseProfileComponentProps<JobType>) {
  const [job, setJob] = useState<JobType | undefined>(initialValue);

  return (
    <>
      <ProfileLayout.Title>지금 어떤 일을 하고 있나요?</ProfileLayout.Title>
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
      <ProfileLayout.FixedButton
        disabled={job === undefined}
        onClick={() => {
          if (job === undefined) {
            return;
          }
          onNext(job);
        }}
      >
        {ctaButtonText}
      </ProfileLayout.FixedButton>
    </>
  );
}
