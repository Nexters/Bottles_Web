'use client';

import { Card } from '@/components/common/card';
import { useCurrentUserProfileQuery } from '@/store/query/useCurrentUserProfileQuery';
import { Paragraph, spacings } from '@bottlesteam/ui';
import { introductionBoxStyle } from './profileEditStyle.css';

export function IntroductionArea() {
  const {
    data: { introduction },
  } = useCurrentUserProfileQuery();

  return (
    <Card style={{ marginTop: spacings.xl }}>
      <Paragraph color="black100" typography="st1">
        내가 쓴 편지
      </Paragraph>
      <div className={introductionBoxStyle}>{introduction[0]?.answer}</div>
    </Card>
  );
}
