import { TextField, spacings } from '@bottlesteam/ui';
import { useState } from 'react';
import { ProfileLayout } from '../layout';
import { BaseProfileComponentProps } from '../types';

const KAKAO_ID_REGEX = /^[A-Za-z\d._-]{4,20}$/;
const ERROR_CAPTION = '카카오톡 아이디를 확인해주세요';

export function KakaoId({ onNext, initialValue, ctaButtonText = '완료' }: BaseProfileComponentProps<string>) {
  const [kakaoId, setKakaoId] = useState(initialValue ?? '');
  const isError = kakaoId.trim().length > 0 && !KAKAO_ID_REGEX.test(kakaoId.trim());
  const disabled = kakaoId.trim().length === 0 || isError;

  return (
    <>
      <ProfileLayout.Title>{'연락처 공유를 위해\n카카오톡 아이디를 입력해 주세요'}</ProfileLayout.Title>
      <ProfileLayout.Description style={{ marginTop: spacings.sm }}>
        오타가 없는지 한 번 더 확인해 주세요
      </ProfileLayout.Description>
      <TextField
        placeholder="영문, 숫자, 특수문자 포함 4-20자"
        value={kakaoId}
        onChange={e => setKakaoId(e.currentTarget.value)}
        style={{ marginTop: spacings.xxl }}
      />
      <TextField.Caption>{isError && ERROR_CAPTION}</TextField.Caption>
      <ProfileLayout.FixedButton
        disabled={disabled}
        onClick={() => {
          onNext(kakaoId);
        }}
      >
        {ctaButtonText}
      </ProfileLayout.FixedButton>
    </>
  );
}