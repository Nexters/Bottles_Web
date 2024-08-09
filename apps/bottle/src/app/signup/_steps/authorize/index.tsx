import { Stepper } from '@/components/stepper';
import { Step } from '@/features/steps/StepContainer';
import { useLeftTimeCaption } from '@/features/time/useLeftTimeCaption';
import { useSendAuthCodeMutation } from '@/store/mutation/useSendAuthCodeMutation';
import { useSignupMutation, WRONG_AUTH_CODE_MESSAGE } from '@/store/mutation/useSignupMutation';
import { Button, TextField } from '@bottlesteam/ui';
import { useState } from 'react';
import { SignupValues, useSignupValues } from '../../SignupProvider';
import { containerStyle, fieldStyle } from './authorizeStyle.css';

export function Authorize() {
  const { setValue, getValues } = useSignupValues();
  const { timeCaption, startTimer } = useLeftTimeCaption();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [isSMSSent, setIsSMSSent] = useState(false);
  const [isAuthCodeError, setIsAuthCodeError] = useState(false);

  const { mutate: signup } = useSignupMutation(() => {
    setIsAuthCodeError(true);
  });
  const { mutate: sendAuthCode } = useSendAuthCodeMutation(() => {
    setAuthCode('');
    isSMSSent ? setIsAuthCodeError(false) : setIsSMSSent(true);
    startTimer();
  });

  const handleSendAuthCode = async () => {
    sendAuthCode(phoneNumber);
  };

  const handleSignup = async () => {
    if (isSMSSent && !isAuthCodeError && authCode.length === 0) {
      return;
    }
    setValue('phoneNumber', String(phoneNumber));
    signup({ ...(getValues() as Omit<SignupValues, 'authCode'>), authCode });
  };

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
              <Button disabled={phoneNumber.length !== 11} variant="solid" size="xs" onClick={handleSendAuthCode}>
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
                <TextField.Caption>{WRONG_AUTH_CODE_MESSAGE}</TextField.Caption>
              ) : (
                isSMSSent && <TextField.Caption>{timeCaption}</TextField.Caption>
              )
            }
          />
        </div>
      </section>
      <Step.FixedButton disabled={!isSMSSent || authCode.length === 0} onClick={handleSignup}>
        확인
      </Step.FixedButton>
    </Step>
  );
}
