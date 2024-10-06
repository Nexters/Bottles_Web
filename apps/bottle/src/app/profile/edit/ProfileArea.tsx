'use client';

import { Card } from '@/components/common/card';
import { useCurrentUserProfileQuery } from '@/store/query/useCurrentUserProfileQuery';
import { Asset, Paragraph, spacings } from '@bottlesteam/ui';
import Link from 'next/link';
import { useMemo } from 'react';
import { profileItemLeftStyle, profileItemStyle, profileSelectListStyle } from './profileEditStyle.css';

export function ProfileArea() {
  const {
    data: {
      kakaoId,
      profileSelect: {
        job,
        mbti,
        region: { city, state },
        smoking,
        alcohol,
        keyword,
        height,
        interest: { culture, sports, entertainment, etc },
        religion,
      },
    },
  } = useCurrentUserProfileQuery();

  const editProfileItems = useMemo(
    () => [
      { title: '카카오톡 아이디', description: kakaoId, endpoint: '/profile/edit/kakao-id' },
      {
        title: '나의 성격',
        description: mbti,
        endpoint: '/profile/edit/mbti',
      },
      {
        title: '나를 표현하는 키워드',
        description: keyword.join(', '),
        endpoint: '/profile/edit/keywords',
      },
      {
        title: '푹 빠진 취미',
        description: [
          ...Object.values(culture),
          ...Object.values(sports),
          ...Object.values(entertainment),
          ...Object.values(etc),
        ].join(', '),
        endpoint: '/profile/edit/interests',
      },
      {
        title: '직업 · 직무',
        description: job,
        endpoint: '/profile/edit/job',
      },
      {
        title: '키',
        description: `${height}cm`,
        endpoint: '/profile/edit/height',
      },
      {
        title: '흡연 스타일',
        description: smoking,
        endpoint: '/profile/edit/smoking',
      },
      {
        title: '음주 스타일',
        description: alcohol,
        endpoint: '/profile/edit/alcohol',
      },
      {
        title: '종교',
        description: religion,
        endpoint: '/profile/edit/religion',
      },
      {
        title: '지역',
        description: `${city} ${state}`,
        endpoint: '/profile/edit/region',
      },
    ],
    [mbti, keyword, kakaoId, culture, sports, entertainment, job, height, smoking, alcohol, religion, city, state, etc]
  );

  return (
    <Card asChild style={{ marginTop: spacings.sm, marginBottom: spacings.xl }}>
      <ul className={profileSelectListStyle}>
        {editProfileItems.map(({ title, description, endpoint }) => (
          <Link href={endpoint} key={title}>
            <li key={title} className={profileItemStyle} onClick={() => {}}>
              <div className={profileItemLeftStyle}>
                <Paragraph color="neutral900" typography="st2">
                  {title}
                </Paragraph>
                <Paragraph color="neutral600" typography="ca">
                  {description}
                </Paragraph>
              </div>
              <Asset type="icon-right" />
            </li>
          </Link>
        ))}
      </ul>
    </Card>
  );
}
