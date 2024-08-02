import { Stepper } from '@/components/stepper';
import { Step } from '@/features/steps/StepContainer';
import { useStep } from '@/features/steps/StepProvider';
import { Button, TextField } from '@bottlesteam/ui';
import { useState } from 'react';
import { useSignupValues } from '../../SignupProvider';
import { containerStyle, fieldStyle } from './authorizeStyle.css';
import { checkAuthCode, sendSMS } from './sendSMS';
import { useTimer } from './useTimer';

const ERROR_MESSAGE = '올바른 번호를 입력해 주세요';

const MAX_SECONDS = 180;
const SECONDS_PER_MINUTE = 60;

export function Authorize() {
  const { onNextStep } = useStep();
  const { setValue } = useSignupValues();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [authCode, setAuthCode] = useState('');

  const { timeLeft, start } = useTimer(MAX_SECONDS);
  const minutesCaption = Math.floor(timeLeft / SECONDS_PER_MINUTE);
  const secondsCaption = timeLeft - minutesCaption * SECONDS_PER_MINUTE;
  const timeCaption = `${minutesCaption}:${secondsCaption.toString().padStart(2, '0')}`;

  const [isSMSSent, setIsSMSSent] = useState(false);
  const [isAuthCodeError, setIsAuthCodeError] = useState(false);

  return (
    <Step>
      <Stepper current={2} max={2} />
      <Step.Title>{'휴대폰 번호로\n본인 인증을 진행할게요'}</Step.Title>
      <section className={containerStyle}>
        <div className={fieldStyle}>
          <Step.Subtitle>휴대폰 번호</Step.Subtitle>
          <TextField
            value={phoneNumber}
            maxLength={8}
            onChange={e => {
              setPhoneNumber(e.currentTarget.value);
            }}
            type="number"
            placeholder="01012345678"
            rightButton={
              <Button
                disabled={phoneNumber.length !== 11}
                variant="solid"
                size="xs"
                onClick={async () => {
                  try {
                    await sendSMS(phoneNumber);
                  } catch (error) {
                    console.log('ERROR!!!', error);
                    alert('문자 발송중에 알 수 없는 오류가 발생했어요.');
                    return;
                  }
                  alert('문자를 확인해주세요!');
                  setAuthCode('');
                  isSMSSent ? setIsAuthCodeError(false) : setIsSMSSent(true);
                  start();
                }}
              >
                {isSMSSent ? '재요청' : '인증요청'}
              </Button>
            }
          />
        </div>
        <div className={fieldStyle}>
          <Step.Subtitle>인증 번호</Step.Subtitle>
          <TextField
            value={authCode}
            onChange={e => {
              setAuthCode(e.currentTarget.value);
            }}
            error={isAuthCodeError}
            placeholder="번호를 입력해 주세요"
            caption={
              isAuthCodeError ? (
                <TextField.Caption>{ERROR_MESSAGE}</TextField.Caption>
              ) : (
                isSMSSent && <TextField.Caption>{timeCaption}</TextField.Caption>
              )
            }
          />
        </div>
      </section>
      <Step.FixedButton
        disabled={!isSMSSent || authCode.length === 0}
        onClick={async () => {
          if (isSMSSent && !isAuthCodeError && authCode.length === 0) {
            return;
          }
          try {
            await checkAuthCode(phoneNumber, authCode);
          } catch (error) {
            console.log('ERROR!!!', error);
            setIsAuthCodeError(true);
            return;
          }
          setValue('phoneNumber', String(phoneNumber));
          onNextStep();
        }}
      >
        다음
      </Step.FixedButton>
    </Step>
  );
}
