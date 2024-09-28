'use client';

import { ProfileLayout } from '@/components/profile/layout';
import { BaseProfileComponentProps } from '@/components/profile/types';
import { CurrentUser } from '@/models/user';
import { spacings, Textarea } from '@bottlesteam/ui';
import { useState } from 'react';

const MINIMUM_TEXT_LENGTH = 50;
const PLACEHOLDER =
  '호기심 많고 새로운 경험을 즐깁니다. 주말엔 책을 읽거나 맛집을 찾아다니며 여유를 즐기고, 친구들과 소소한 모임으로 에너지를 충전해요';

export function Introduction({ ctaButtonText }: BaseProfileComponentProps<CurrentUser['introduction']>) {
  const [value, setValue] = useState('');

  const isError = value.length < MINIMUM_TEXT_LENGTH && value.length > 0;

  return (
    <>
      <ProfileLayout.Title>{'보틀에 담을\n소개를 작성해 주세요'}</ProfileLayout.Title>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: spacings.xxl }}>
        <Textarea
          placeholder={PLACEHOLDER}
          value={value}
          onChange={e => {
            setValue(e.currentTarget.value);
          }}
          error={isError}
          caption={<Textarea.Caption>{isError && '최소 50글자 이상 작성해주세요'}</Textarea.Caption>}
        />
      </div>
      <ProfileLayout.FixedButton onClick={() => {}}>{ctaButtonText}</ProfileLayout.FixedButton>
    </>
  );
}
