import { Control } from '@/components/common/control';
import { Step } from '@/features/steps/StepContainer';
import { Keyword, keywordList } from '@/models/profile/keywords';
import { Button } from '@bottlesteam/ui';
import { useState } from 'react';
import { BaseProfileComponentProps } from '../types';
import { keywordsStyle } from './keywordsStyle.css';

const MIN_SELECTED = 3;
const MAX_SELECTED = 5;

export function Keywords({ initialValue, ctaButtonText = '완료', onNext }: BaseProfileComponentProps<Keyword[]>) {
  const [keywords, setKeywords] = useState<Keyword[]>(initialValue ?? []);

  return (
    <>
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
          onNext(keywords);
        }}
      >
        {`${ctaButtonText} ${keywords.length} / ${MAX_SELECTED}`}
      </Step.FixedButton>
    </>
  );
}
