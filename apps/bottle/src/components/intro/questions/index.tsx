import { ProfileLayout } from '@/components/profile/layout';
import { keyMap } from '@/features/bottle-storage/bottleStorage';
import { useGetBottleStorage } from '@/features/bottle-storage/useGetBottleStorage';
import { useCurrentUserProfileQuery } from '@/store/query/useCurrentUserProfileQuery';
import { Chip, colors, spacings, typography } from '@bottlesteam/ui';
import { useCallback, useEffect, useRef, useState } from 'react';
import { QuestionCard } from './QuestionCard';
import { keywordsContainer } from './questionCardStyle.css';

type QuestionCardAnswers = [string, string, string, string, string, string];

interface Props {
  onNext: (answers: QuestionCardAnswers) => void;
  ctaButtonText: string;
}

export function Questions({ onNext, ctaButtonText }: Props) {
  const initialValue = useGetBottleStorage<QuestionCardAnswers>(keyMap.introAnswers);
  const {
    data: {
      profileSelect: { keyword: keywords },
    },
  } = useCurrentUserProfileQuery();

  const answersRef = useRef<QuestionCardAnswers>(initialValue ?? ['', '', '', '', '', '']);
  const answers = answersRef.current;

  const [disabled, setDisabled] = useState(true);

  const handleAnswerChange = useCallback(() => {
    const isAllAnswered = answersRef.current.every(answer => answer.length >= 5);
    setDisabled(!isAllAnswered);
  }, []);

  useEffect(() => {
    if (initialValue != null) {
      answersRef.current = initialValue;
      handleAnswerChange();
    }
  }, [initialValue, handleAnswerChange]);

  return (
    <>
      <ProfileLayout.Title>{'보틀에 담을\n소개를 작성해 볼까요?'}</ProfileLayout.Title>
      <ProfileLayout.Subtitle style={{ marginTop: spacings.sm }}>
        {'타인에게 불쾌감을 줄 경우 제재를 받을 수 있어요'}
      </ProfileLayout.Subtitle>
      <ProfileLayout.Subtitle style={{ marginTop: spacings.sm }}>
        답변한 내용은 다음 단계에서 다듬을 수 있어요
      </ProfileLayout.Subtitle>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: `${spacings.xxl} 0`,
          gap: spacings.xxl,
        }}
      >
        <QuestionCard
          onChange={(value: string) => {
            answers[0] = value.trim();
            handleAnswerChange();
          }}
          initialValue={initialValue?.[0]}
          number={1}
          title={'인사하기'}
          placeholder="디자이너로 근무하고 있는 3년차 직장인"
          blur={false}
          guideText={{ top: '안녕하세요!', bottom: '입니다.' }}
        />
        <QuestionCard
          number={2}
          onChange={(value: string) => {
            answers[1] = value.trim();
            handleAnswerChange();
          }}
          initialValue={initialValue?.[1]}
          title={'성격 소개하기'}
          placeholder="소확행을 추구하는 사람"
          guideText={{ top: '제 성격을 한 마디로 표현하자면', bottom: '(이)에요.' }}
          bottom={
            <div className={keywordsContainer}>
              <p style={{ color: colors.neutral600, ...typography.bo }}>나의 성격 키워드를 참고해보세요</p>
              <div style={{ display: 'flex', rowGap: spacings.sm, columnGap: spacings.xs, flexWrap: 'wrap' }}>
                {keywords.map(keyword => (
                  <Chip key={keyword}>{keyword}</Chip>
                ))}
              </div>
            </div>
          }
        />
        <QuestionCard
          number={3}
          initialValue={initialValue?.[2]}
          onChange={(value: string) => {
            answers[2] = value.trim();
            handleAnswerChange();
          }}
          title={'다른 사람이 보는 나'}
          placeholder="섬세하고 어른스럽다는"
          guideText={{ top: '저는 제 주변인에게', bottom: '(은)는 말을 많이 들어요.' }}
        />
        <QuestionCard
          number={4}
          onChange={(value: string) => {
            answers[3] = value.trim();
            handleAnswerChange();
          }}
          initialValue={initialValue?.[3]}
          title={'외모 표현하기'}
          placeholder="강아지상이고 진한 눈썹이 포인트"
          guideText={{ top: '제 외모의 특징을 한가지 뽑자면', bottom: '(이)에요.' }}
        />
        <QuestionCard
          number={5}
          onChange={(value: string) => {
            answers[4] = value.trim();
            handleAnswerChange();
          }}
          initialValue={initialValue?.[4]}
          title={'연애할 때의 모습 표현하기'}
          placeholder="잘 챙겨주고 연락을 잘 하는"
          guideText={{ top: '연애할 때는', bottom: '스타일이에요.' }}
        />
        <QuestionCard
          number={6}
          onChange={(value: string) => {
            answers[5] = value.trim();
            handleAnswerChange();
          }}
          initialValue={initialValue?.[5]}
          title={'이상형 작성하기'}
          placeholder="서로에게 좋은 친구가 될 수 있는 사람"
          guideText={{ top: '보틀에서는', bottom: '(을)를 만나고 싶어요.' }}
        />
      </div>
      <ProfileLayout.FixedButton
        onClick={() => {
          onNext(answersRef.current.map(answer => answer.trim()) as QuestionCardAnswers);
        }}
        disabled={disabled}
      >
        {ctaButtonText}
      </ProfileLayout.FixedButton>
    </>
  );
}
