'use client';

import { SelectedProfile } from '@/components/common/selected-profile';
import { ProfileLayout } from '@/components/profile/layout';
import { BaseProfileComponentProps } from '@/components/profile/types';
import { CurrentUser } from '@/models/user';
import { useCurrentUserProfileQuery } from '@/store/query/useCurrentUserProfileQuery';
import { spacings, Textarea } from '@bottlesteam/ui';
import { useState } from 'react';

const MINIMUM_TEXT_LENGTH = 50;
const PLACEHOLDER =
  '호기심 많고 새로운 경험을 즐깁니다. 주말엔 책을 읽거나 맛집을 찾아다니며 여유를 즐기고, 친구들과 소소한 모임으로 에너지를 충전해요';

/**
 * @deprecated use IntroductionV2 instead
 * suppport iOS v1.0.10, android v1.0.3
 */

export function Introduction({
  initialValue,
  onNext,
  ctaButtonText,
}: BaseProfileComponentProps<CurrentUser['introduction']>) {
  const [value, setValue] = useState(initialValue != null ? (initialValue[0]?.answer ?? '') : '');
  const { data } = useCurrentUserProfileQuery();

  const isError = value.length < MINIMUM_TEXT_LENGTH && value.length > 0;

  return (
    <>
      <ProfileLayout.Title>{'보틀에 담을\n소개를 작성해 주세요'}</ProfileLayout.Title>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: spacings.xxl, gap: spacings.sm }}>
        <Textarea
          placeholder={PLACEHOLDER}
          value={value}
          onChange={e => {
            setValue(e.currentTarget.value);
          }}
          maxLength={300}
          defaultValue={initialValue != null ? initialValue[0]?.answer : undefined}
          error={isError}
          caption={<Textarea.Caption>{isError && '최소 50글자 이상 작성해주세요'}</Textarea.Caption>}
        />

        <SelectedProfile
          profile={data.profileSelect}
          items={({ personalities, hobbies, basicInformation }) => (
            <>
              <SelectedProfile.Item type="내 키워드를 참고해보세요" values={basicInformation} />
              <SelectedProfile.Item type="나의 성격은" values={personalities} />
              <SelectedProfile.Item type="내가 푹 빠진 취미는" values={hobbies} />
            </>
          )}
        />
      </div>
      <ProfileLayout.FixedButton
        disabled={isError || value.length === 0}
        onClick={() => {
          onNext([{ question: '', answer: value }]);
        }}
      >
        {ctaButtonText}
      </ProfileLayout.FixedButton>
    </>
  );
}
