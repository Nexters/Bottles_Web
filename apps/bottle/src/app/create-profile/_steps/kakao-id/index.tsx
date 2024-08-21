import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { POST, createInit } from '@/features/server';
import { getClientSideTokens } from '@/features/server/clientSideTokens';
import { Step } from '@/features/steps/StepContainer';
import { TextField, spacings } from '@bottlesteam/ui';
import { useState } from 'react';
import { useCreateProfileValues } from '../../CreateProfileProvider';

export function KaKaoId() {
  const { send } = useAppBridge();
  const { setValue, getValue, getValues } = useCreateProfileValues();

  const [kakaoId, setKakaoId] = useState(getValue('kakaoId') ?? '');
  const disabled = kakaoId.trim().length === 0;

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
      <Step.FixedButton
        disabled={disabled}
        onClick={async () => {
          setValue('kakaoId', kakaoId);

          await POST(
            `/api/v1/profile/choice`,
            getClientSideTokens(),
            createInit(getClientSideTokens().accessToken, { ...getValues() })
          );
          send({ type: AppBridgeMessageType.CREATE_PROFILE_COMPLETE });
        }}
      >
        다음
      </Step.FixedButton>
    </>
  );
}
