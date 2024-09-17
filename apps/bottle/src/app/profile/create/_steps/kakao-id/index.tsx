import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { Step } from '@/features/steps/StepContainer';
import { TextField, spacings } from '@bottlesteam/ui';
import { useState } from 'react';
import { BaseFunnelComponentProps } from '../types';

const KAKAO_ID_REGEX = /^[A-Za-z\d._-]{4,20}$/;
const ERROR_CAPTION = '카카오톡 아이디를 확인해주세요';

export function KakaoId({ onNext, initialValue, ctaButtonText = '완료' }: BaseFunnelComponentProps<string>) {
  const { send } = useAppBridge();

  const [kakaoId, setKakaoId] = useState(initialValue ?? '');
  const isError = kakaoId.trim().length > 0 && !KAKAO_ID_REGEX.test(kakaoId.trim());
  const disabled = kakaoId.trim().length === 0 || isError;

  return (
    <>
      <Step.Title>{'연락처 공유를 위해\n카카오톡 아이디를 입력해 주세요'}</Step.Title>
      <Step.Description style={{ marginTop: spacings.sm }}>오타가 없는지 한 번 더 확인해 주세요</Step.Description>
      <TextField
        placeholder="영문, 숫자, 특수문자 포함 4-20자"
        value={kakaoId}
        onChange={e => setKakaoId(e.currentTarget.value)}
        style={{ marginTop: spacings.xxl }}
      />
      <TextField.Caption>{isError && ERROR_CAPTION}</TextField.Caption>
      <Step.FixedButton
        disabled={disabled}
        onClick={async () => {
          await onNext(kakaoId);

          // await POST(
          //   `/api/v1/profile/choice`,
          //   getClientSideTokens(),
          //   createInit(getClientSideTokens().accessToken, { ...getValues() })
          // );
          send({ type: AppBridgeMessageType.CREATE_PROFILE_COMPLETE });
        }}
      >
        {ctaButtonText}
      </Step.FixedButton>
    </>
  );
}
