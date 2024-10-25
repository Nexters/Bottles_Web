'use client';

import { ProfileLayout } from '@/components/profile/layout';
import { BaseProfileComponentProps } from '@/components/profile/types';
import { CurrentUser } from '@/models/user';
import { spacings, Textarea } from '@bottlesteam/ui';
import { useState } from 'react';

const MINIMUM_TEXT_LENGTH = 50;
const PLACEHOLDER =
  '호기심 많고 새로운 경험을 즐깁니다. 주말엔 책을 읽거나 맛집을 찾아다니며 여유를 즐기고, 친구들과 소소한 모임으로 에너지를 충전해요';

export function IntroductionV2({
  initialValue,
  onNext,
  ctaButtonText,
}: BaseProfileComponentProps<CurrentUser['introduction'][0]['answer']>) {
  const [value, setValue] = useState(initialValue ?? '');

  const isError = value.length < MINIMUM_TEXT_LENGTH && value.length > 0;

  return (
    <>
      <ProfileLayout.Title>{'고생 많으셨어요!\n작성한 소개를 다듬어 보세요'}</ProfileLayout.Title>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: spacings.xxl, gap: spacings.sm }}>
        <Textarea
          placeholder={PLACEHOLDER}
          value={value}
          onChange={e => {
            setValue(e.currentTarget.value);
          }}
          maxLength={300}
          defaultValue={initialValue}
          error={isError}
          caption={<Textarea.Caption>{isError && '최소 50글자 이상 작성해주세요'}</Textarea.Caption>}
        />
      </div>
      <ProfileLayout.FixedButton
        disabled={isError || value.length === 0}
        onClick={() => {
          onNext(value);
        }}
      >
        {ctaButtonText}
      </ProfileLayout.FixedButton>
    </>
  );
}
