import { Button } from '@bottlesteam/ui';
import { useState } from 'react';
import { Control } from '../../../../components/control';
import { Stepper } from '../../../../components/stepper';
import { Step } from '../../../../features/steps/StepContainer';
import { useStep } from '../../../../features/steps/StepProvider';
import { useCreateProfileValues } from '../../CreateProfileProvider';
import { keywordsStyle } from './keywordsStyle.css';

const keywordList = [
  '다정한',
  '적극적인',
  '신중한',
  '활기찬',
  '열정적인',
  '예의바른',
  '자유로운',
  '단순한',
  '진지한',
  '애교있는',
  '재밌는',
  '쿨한',
  '차분한',
  '감성적인',
  '논리적인',
  '솔직한',
  '털털한',
  '눈치빠른',
  '여유로운',
  '매너좋은',
] as const;

const MIN_SELECTED = 3;
const MAX_SELECTED = 5;

export function Keywords() {
  const { onNextStep } = useStep();
  const { setValue } = useCreateProfileValues();

  const [keywords, setKeywords] = useState<(typeof keywordList)[number][]>([]);

  return (
    <Step>
      <Stepper current={2} max={9} />
      <Step.Title>나를 표현하는 키워드는?</Step.Title>
      <Step.Description style={{ marginTop: '12px' }}>최소 3개, 최대 5개까지 선택할 수 있어요</Step.Description>
      <Control value={keywords}>
        <section className={keywordsStyle}>
          {keywordList.map((item, index) => (
            <Control.Item
              value={item}
              key={index}
              onClick={() => {
                if (keywords.length >= MAX_SELECTED && !keywords.includes(item)) {
                  alert('최대 5개까지 선택할 수 있어요');
                  return;
                }
                setKeywords(prev => {
                  if (prev.includes(item)) {
                    return prev.filter(prevItem => item !== prevItem);
                  }
                  return [...prev, item];
                });
              }}
            >
              <Button variant="outlined" size="sm">
                {item}
              </Button>
            </Control.Item>
          ))}
        </section>
      </Control>
      <Step.FixedButton
        disabled={keywords.length < MIN_SELECTED}
        onClick={() => {
          if (keywords.length === 0) {
            return;
          }
          setValue('keyword', keywords);
          onNextStep();
        }}
      >
        {`다음 ${keywords.length} / ${MAX_SELECTED}`}
      </Step.FixedButton>
    </Step>
  );
}
