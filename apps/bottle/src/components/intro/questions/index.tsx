import { ProfileLayout } from '@/components/profile/layout';
import { spacings } from '@bottlesteam/ui';
import { useRef } from 'react';

type QuestionCardAnswers = [string, string, string, string, string];

interface Props {
  initialValue: QuestionCardAnswers;
  onNext: (answers: QuestionCardAnswers) => void;
}

export function Questions({ initialValue }: Props) {
  const answersRef = useRef(initialValue ?? ['', '', '', '', '']);

  return (
    <>
      <ProfileLayout.Title>{'보틀에 담을\n소개를 작성해 주세요'}</ProfileLayout.Title>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: spacings.xxl, gap: spacings.sm }}></div>
      <ProfileLayout.FixedButton onClick={() => {}}>{''}</ProfileLayout.FixedButton>
    </>
  );
}
