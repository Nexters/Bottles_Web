'use client';

import { Header } from '@/components/header';
import { Step } from '@/features/steps/StepContainer';
import { useLeftTimeCaption } from '@/features/time/useLeftTimeCaption';
import { useUserAgent } from '@/features/web-view/UserAgentProvider';
import { webViewAPI } from '@/features/web-view/api';
import { useLoginMutation } from '@/store/mutation/useLoginMutation';
import { useSendAuthCodeMutation } from '@/store/mutation/useSendAuthCodeMutation';
import { WRONG_AUTH_CODE_MESSAGE } from '@/store/mutation/useSignupMutation';
import { Asset, Button, spacings, TextField } from '@bottlesteam/ui';
import { useState } from 'react';
import { containerStyle, fieldStyle } from './loginStyle.css';

export default function LoginPage() {
  const userAgent = useUserAgent();
  const { timeCaption, startTimer } = useLeftTimeCaption();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [isSMSSent, setIsSMSSent] = useState(false);
  const [isAuthCodeError, setIsAuthCodeError] = useState(false);

  const { mutate: login } = useLoginMutation(() => {
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

  const handleLogin = async () => {
    if (isSMSSent && !isAuthCodeError && authCode.length === 0) {
      return;
    }
    login({ phoneNumber, authCode });
  };

  return (
    <>
      <Header>
        <Asset
          type="icon-arrow-left"
          onClick={() => {
            webViewAPI({
              type: 'onWebViewClose',
              payload: {
                iOS: {
                  type: 'onWebViewClose',
                },
              },
              userAgent,
            });
          }}
        />
      </Header>
      <Step>
        <Step.Title style={{ marginTop: spacings.xl }}>{'휴대폰 번호로\n본인 인증을 진행할게요'}</Step.Title>
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
        <Step.FixedButton disabled={!isSMSSent || authCode.length === 0} onClick={handleLogin}>
          확인
        </Step.FixedButton>
      </Step>
    </>
  );
}