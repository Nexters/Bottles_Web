import { Stepper } from '@/components/stepper';
import { POST, createInit } from '@/features/server';
import { Step } from '@/features/steps/StepContainer';
import { useUserAgent } from '@/features/web-view/UserAgentProvider';
import { webViewAPI } from '@/features/web-view/api';
import { TextField, spacings } from '@bottlesteam/ui';
import { useState } from 'react';
import { useCreateProfileValues } from '../../CreateProfileProvider';

export function KaKaoId() {
  const userAgent = useUserAgent();
  const { setValue, getValue, getValues } = useCreateProfileValues();

  const [kakaoId, setKakaoId] = useState(getValue('kakaoId') ?? '');
  const disabled = kakaoId.trim().length === 0;

  return (
    <Step>
      <Stepper current={10} max={10} />
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
            `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/profile/choice`,
            createInit(localStorage.getItem('accessToken') ?? '', { ...getValues() })
          );
          webViewAPI({
            type: 'onCreateProfileComplete',
            payload: { iOS: { type: 'onCreateProfileComplete' } },
            userAgent,
          });
        }}
      >
        다음
      </Step.FixedButton>
    </Step>
  );
}
