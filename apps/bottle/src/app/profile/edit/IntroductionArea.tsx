'use client';

import { Card } from '@/components/card';
import { Paragraph, spacings } from '@bottlesteam/ui';
import { introductionBoxStyle } from './profileEditStyle.css';
import { useMyInformationQuery } from '@/store/query/useMyInformation';

export function IntroductionArea() {
  const {
    data: { introduction },
  } = useMyInformationQuery();

  return (
    <Card style={{ marginTop: spacings.xl }}>
      <Paragraph color="black100" typography="st1">
        내가 쓴 편지
      </Paragraph>
      <div className={introductionBoxStyle}>{introduction[0]?.answer}</div>
    </Card>
  );
}
