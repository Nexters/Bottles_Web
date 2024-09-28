'use client';

import { Card } from '@/components/common/card';
import { useCurrentUserProfileQuery } from '@/store/query/useCurrentUserProfileQuery';
import { Asset, Paragraph, spacings } from '@bottlesteam/ui';
import Link from 'next/link';
import { introductionBoxStyle, introductionTextBoxStyle } from './profileEditStyle.css';

const NO_INTRODUCTION_FALLBACK_TEXT = '아직 자기소개를 작성하지 않았어요';

export function IntroductionArea() {
  const {
    data: { introduction },
  } = useCurrentUserProfileQuery();

  return (
    <Card style={{ marginTop: spacings.xl }}>
      <Link href="/profile/edit/introduction">
        <div className={introductionTextBoxStyle}>
          <Paragraph color="black100" typography="st1">
            내가 쓴 편지
          </Paragraph>
          {introduction != null && (
            <button style={{ background: 'none', border: 'none' }}>
              <Asset type="icon-right" />
            </button>
          )}
        </div>
      </Link>
      <div className={introductionBoxStyle}>
        {introduction != null ? introduction[0]?.answer : NO_INTRODUCTION_FALLBACK_TEXT}
      </div>
    </Card>
  );
}
