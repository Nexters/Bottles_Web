import { Control } from '@/components/common/control';
import { Step } from '@/features/steps/StepContainer';
import { Profile } from '@/models/profile';
import { Culture, ETC, Entertainment, Sports, culture, entertainment, etc, sports } from '@/models/profile/interests';
import { Button, ButtonProps, spacings } from '@bottlesteam/ui';
import { useState } from 'react';
import { BaseProfileComponentProps } from '../types';
import { interestsStyle } from './interestsStyle.css';

export type Interest = Culture | Sports | Entertainment | ETC;

const MIN_SELECTD = 3;
const MAX_SELECTED = 10;

export function Interests({
  initialValue,
  onNext,
  ctaButtonText = '완료',
}: BaseProfileComponentProps<Profile['interest']>) {
  const [interests, setInterests] = useState<Interest[]>(initialValue != null ? processSelected(initialValue) : []);

  const filterPredicate = (item: Interest) => interests.includes(item);

  const handleClick = (item: Interest) => {
    if (interests.length >= MAX_SELECTED && !interests.includes(item)) {
      // TODO: replace alert to Native.onOpenToast()
      alert('최대 10개까지 선택할 수 있어요');
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
      <Step.Title>푹 빠진 취미는 무엇인가요?</Step.Title>
      <Step.Description style={{ marginTop: '12px' }}>최소 3개, 최대 10개까지 선택할 수 있어요</Step.Description>
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
        <section className={interestsStyle} style={{ marginBottom: spacings.xl }}>
          {etc.map((item, index) => (
            <Control.Item value={item} key={index} onClick={() => handleClick(item)}>
              <ItemButton>{item}</ItemButton>
            </Control.Item>
          ))}
        </section>
      </Control>
      <Step.FixedButton
        disabled={interests.length < MIN_SELECTD}
        onClick={() => {
          onNext({
            culture: culture.filter(filterPredicate),
            sports: sports.filter(filterPredicate),
            entertainment: entertainment.filter(filterPredicate),
            etc: etc.filter(filterPredicate),
          });
        }}
      >
        {`${ctaButtonText} ${interests.length} / ${MAX_SELECTED}`}
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

function processSelected(selected: Profile['interest']) {
  /**
   * NOTE: Prototype Object.values() causes incorrect type inference
   * used spread operator instead
   */
  return [...selected.culture, ...selected.sports, ...selected.entertainment, ...selected.etc] as Interest[];
}
