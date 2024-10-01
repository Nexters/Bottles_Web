'use client';

import { BottleCard } from '@/components/common/bottle-card';
import { ProfileLayout } from '@/components/profile/layout';
import { useRecommendationBottlesQuery } from '@/store/query/useRecommendationBottlesQuery';
import { useUserInfoQuery } from '@/store/query/useUserInfoQuery';
import { spacings } from '@bottlesteam/ui';
import { pick } from 'es-toolkit';

export function Recommendations() {
  const { data: currentUser } = useUserInfoQuery();
  const { data: recommendationBottles } = useRecommendationBottlesQuery();

  return (
    <>
      <ProfileLayout.Title>{`${currentUser.name}님에게\n추천하는 분들이에요!`}</ProfileLayout.Title>
      <ProfileLayout.Subtitle>시간이 지나면 새로운 분들을 추천해 드려요</ProfileLayout.Subtitle>
      <section style={{ marginTop: spacings.xxl, display: 'flex', flexDirection: 'column', gap: spacings.md }}>
        {recommendationBottles.randomBottles.map(bottle => (
          <BottleCard key={bottle.id}>
            <BottleCard.TimeTag>{bottle.expiredAt}</BottleCard.TimeTag>
            <BottleCard.Introduction>
              {
                // FIXME
                '어떤 날은 아침에 눈이 번쩍 떠지는 게 힘이 펄펄 나는 것 같은가 하면 또 어떤 날은 몸이 진흙으로 만들어진 것 같은 때가 있습니다...'
              }
            </BottleCard.Introduction>
            <BottleCard.UserInformation
              {...pick(bottle, ['userName', 'age', 'mbti', 'userImageUrl', 'likeEmoji', 'lastActivatedAt'])}
            />
          </BottleCard>
        ))}
      </section>
    </>
  );
}
