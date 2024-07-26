import { Button, ButtonProps, spacings } from '@bottlesteam/ui';
import { useState } from 'react';
import { Control } from '../../../../components/control';
import { Stepper } from '../../../../components/stepper';
import { useOnboardingValues } from '../../OnboardingProvider';
import { useStep } from '../../StepProvider';
import { Step } from '../../_step/StepContainer';
import { culture, entertainment, etc, sports } from './constants';
import { interestsStyle } from './interestsStyle.css';

// type Interest = {
//   culture: string[];
//   sports: string[];
//   entertainment: string[];
//   etc: string[];
// };

type InterestItem = (typeof culture | typeof sports | typeof entertainment | typeof etc)[number];

const MAX_SELECTED = 5;

export function Interests() {
  const { onNextStep } = useStep();
  const { setValue } = useOnboardingValues();

  const [interests, setInterests] = useState<InterestItem[]>([]);

  const filterPredicate = (item: InterestItem) => interests.includes(item);

  const handleClick = (item: InterestItem) => {
    if (interests.length >= MAX_SELECTED && !interests.includes(item)) {
      alert('최대 5개까지 선택할 수 있어요');
      return;
    }
    setInterests(prev => {
      if (prev.includes(item)) {
        return prev.filter(prevItem => item !== prevItem);
      }
      return [...prev, item];
    });
  };

  return (
    <>
      <Step>
        <Stepper current={3} max={9} />
        <Step.Title>푹 빠진 취미는 무엇인가요?</Step.Title>
        <Step.Description style={{ marginTop: '12px' }}>최대 5개까지 선택할 수 있어요</Step.Description>
        <Step.Subtitle style={{ marginTop: spacings.xxl }}>문화 예술</Step.Subtitle>
        <Control value={interests}>
          <section className={interestsStyle}>
            {culture.map((item, index) => (
              <Control.Item value={item} key={index} onClick={() => handleClick(item)}>
                <ItemButton>{item}</ItemButton>
              </Control.Item>
            ))}
          </section>
          <Step.Subtitle style={{ marginTop: spacings.xl }}>스포츠</Step.Subtitle>
          <section className={interestsStyle}>
            {sports.map((item, index) => (
              <Control.Item value={item} key={index} onClick={() => handleClick(item)}>
                <ItemButton>{item}</ItemButton>
              </Control.Item>
            ))}
          </section>
          <Step.Subtitle style={{ marginTop: spacings.xl }}>오락</Step.Subtitle>
          <section className={interestsStyle}>
            {entertainment.map((item, index) => (
              <Control.Item value={item} key={index} onClick={() => handleClick(item)}>
                <ItemButton>{item}</ItemButton>
              </Control.Item>
            ))}
          </section>
          <Step.Subtitle style={{ marginTop: spacings.xl }}>기타</Step.Subtitle>
          <section className={interestsStyle}>
            {etc.map((item, index) => (
              <Control.Item value={item} key={index} onClick={() => handleClick(item)}>
                <ItemButton>{item}</ItemButton>
              </Control.Item>
            ))}
          </section>
        </Control>
      </Step>
      <Step.FixedButton
        disabled={interests.length === 0}
        onClick={() => {
          setValue('interest', {
            culture: culture.filter(filterPredicate),
            sports: sports.filter(filterPredicate),
            entertainment: entertainment.filter(filterPredicate),
            etc: etc.filter(filterPredicate),
          });
          onNextStep();
        }}
      >
        다음
      </Step.FixedButton>
    </>
  );
}

function ItemButton(props: Omit<ButtonProps, 'variant' | 'size'>) {
  return (
    <Button variant="outlined" size="sm" {...props}>
      {props.children}
    </Button>
  );
}