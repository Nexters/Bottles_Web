import { Control } from '@/components/control';
import { Step } from '@/features/steps/StepContainer';
import { useStep } from '@/features/steps/StepProvider';
import { useSignupProfileMutation } from '@/store/mutation/useSignupProfileMutation';
import { Button, TextField } from '@bottlesteam/ui';
import { useState } from 'react';
import { useSignupProfileValues, SignupProfileValues } from '../../SignupProvider';
import { birthDateWrapper, buttonsWrapper, containerStyle, fieldStyle } from './informationStyle.css';

export function Information() {
  const { onNextStep } = useStep();
  const { setValues, getValues } = useSignupProfileValues();
  const { mutateAsync } = useSignupProfileMutation();

  const [name, setName] = useState('');
  const [year, setYear] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [gender, setGender] = useState<SignupProfileValues['gender']>();

  // TODO: validate year, month, day
  const isDisabled =
    name.length === 0 ||
    year.length !== 4 ||
    Number(year) > 2003 ||
    month.length < 1 ||
    month.length > 2 ||
    day.length < 1 ||
    day.length > 2 ||
    gender === undefined;

  return (
    <>
      <Step.Title>{'프로필 생성을 위해\n개인 정보를 입력해 주세요'}</Step.Title>
      <section className={containerStyle}>
        <div className={fieldStyle}>
          <Step.Subtitle asChild>
            <label>이름</label>
          </Step.Subtitle>
          <TextField placeholder="홍길동" value={name} onChange={e => setName(e.currentTarget.value)} />
        </div>
        <div className={fieldStyle}>
          <Step.Subtitle asChild>
            <label>생년월일</label>
          </Step.Subtitle>
          <div className={birthDateWrapper}>
            <TextField
              placeholder="YYYY"
              type="number"
              maxLength={4}
              value={year}
              onChange={e => setYear(e.currentTarget.value)}
            />
            <TextField
              placeholder="MM"
              type="number"
              value={month}
              maxLength={2}
              onChange={e => setMonth(e.currentTarget.value)}
            />
            <TextField
              placeholder="DD"
              type="number"
              value={day}
              maxLength={2}
              onChange={e => setDay(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className={fieldStyle}>
          <Step.Subtitle asChild>
            <label>성별</label>
          </Step.Subtitle>
          <div className={buttonsWrapper}>
            <Control value={gender}>
              <Control.Item value={'MALE'} onClick={() => setGender('MALE')}>
                <Button variant="outlined" size="md" style={{ flex: 1 }}>
                  남자
                </Button>
              </Control.Item>
              <Control.Item value={'FEMALE'} onClick={() => setGender('FEMALE')}>
                <Button variant="outlined" size="md" style={{ flex: 1 }}>
                  여자
                </Button>
              </Control.Item>
            </Control>
          </div>
        </div>
      </section>
      <Step.FixedButton
        disabled={isDisabled}
        onClick={async () => {
          if (isDisabled) {
            return;
          }
          setValues([
            { key: 'name', value: name },
            { key: 'birthYear', value: Number(year) },
            { key: 'birthMonth', value: Number(month) },
            { key: 'birthDay', value: Number(day) },
            { key: 'gender', value: gender },
          ]);
          const signupProfileValues = getValues() as SignupProfileValues;
          await mutateAsync(signupProfileValues);
          onNextStep();
        }}
      >
        다음
      </Step.FixedButton>
    </>
  );
}
