'use client';

import { Card } from '@/components/common/card';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { buildWebViewUrl } from '@/features/app-bridge/utils';
import { useUserAgent } from '@/features/user-agent/UserAgentProvider';
import { useMyInformationQuery } from '@/store/query/useMyInformation';
import { Asset, Paragraph, spacings } from '@bottlesteam/ui';
import { useMemo } from 'react';
import { profileItemLeftStyle, profileItemStyle } from './profileEditStyle.css';

export function ProfileArea() {
  const { isMobile } = useUserAgent();
  const { send } = useAppBridge();
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

  const editProfileItems = useMemo(
    () => [
      { title: '카카오톡 아이디', description: 'dhassidu11', endpoint: '/profile/edit/kakao-id' },
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
        endpoint: '/profile/edit/interest',
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
        description: city,
        endpoint: '/profile/edit/region',
      },
    ],
    [mbti, keyword, culture, sports, entertainment, job, height, smoking, alcohol, religion, city, etc]
  );

  return (
    <Card asChild style={{ marginTop: spacings.sm, marginBottom: spacings.xl }}>
      <ul>
        {editProfileItems.map(({ title, description, endpoint }) => (
          <li
            key={title}
            className={profileItemStyle}
            onClick={() => {
              if (!isMobile && process.env.NEXT_PUBLIC_MODE === 'DEVELOPMENT') {
                window.open(`http://localhost:3000${endpoint}`, '_blank');
                console.log('???');
                return;
              }
              send({ type: AppBridgeMessageType.OPEN_WEB_VIEW, payload: { href: buildWebViewUrl(endpoint) } });
            }}
          >
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
