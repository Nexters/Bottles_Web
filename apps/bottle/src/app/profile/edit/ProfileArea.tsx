'use client';

import { Card } from '@/components/card';
import { useMyInformationQuery } from '@/store/query/useMyInformation';
import { Asset, Paragraph, spacings } from '@bottlesteam/ui';
import { useMemo } from 'react';
import { profileItemLeftStyle, profileItemStyle } from './profileEditStyle.css';

export function ProfileArea() {
  const {
    data: {
      profileSelect: {
        job,
        mbti,
        region: { city },
        smoking,
        alcohol,
        keyword,
        height,
        interest: { culture, sports, entertainment, etc },
        religion,
      },
    },
  } = useMyInformationQuery();

  const profileItems = useMemo(
    () => [
      { title: '카카오톡 아이디', description: 'dhassidu11', onRightArrowClick: () => {} },
      {
        title: '나의 성격',
        description: mbti,
        onRightArrowClick: () => {},
      },
      {
        title: '나를 표현하는 키워드',
        description: keyword.join(', '),
        onRightArrowClick: () => {},
      },
      {
        title: '푹 빠진 취미',
        description: [
          ...Object.values(culture),
          ...Object.values(sports),
          ...Object.values(entertainment),
          ...Object.values(etc),
        ].join(', '),
        onRightArrowClick: () => {},
      },
      {
        title: '직업 · 직무',
        description: job,
        onRightArrowClick: () => {},
      },
      {
        title: '키',
        description: `${height}cm`,
        onRightArrowClick: () => {},
      },
      {
        title: '흡연 스타일',
        description: smoking,
        onRightArrowClick: () => {},
      },
      {
        title: '음주 스타일',
        description: alcohol,
        onRightArrowClick: () => {},
      },
      {
        title: '종교',
        description: religion,
        onRightArrowClick: () => {},
      },
      {
        title: '지역',
        description: city,
        onRightArrowClick: () => {},
      },
    ],
    [mbti, keyword, culture, sports, entertainment, job, height, smoking, alcohol, religion, city, etc]
  );

  return (
    <Card asChild style={{ marginTop: spacings.sm, marginBottom: spacings.xl }}>
      <ul>
        {profileItems.map(({ title, description }) => (
          <li key={title} className={profileItemStyle}>
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
        ))}
      </ul>
    </Card>
  );
}
