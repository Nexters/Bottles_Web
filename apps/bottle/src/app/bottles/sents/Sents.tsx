'use client';

import { BottleCard } from '@/components/common/bottle-card';
import { ProfileLayout } from '@/components/profile/layout';
import { useSentBottlesQuery } from '@/store/query/useSentBottlesQuery';
import { useUserInfoQuery } from '@/store/query/useUserInfoQuery';
import { spacings } from '@bottlesteam/ui';
import { pick } from 'es-toolkit';

export function Sents() {
  const { data: currentUser } = useUserInfoQuery();
  const { data: sentBottlesData } = useSentBottlesQuery();

  console.log('DATA', sentBottlesData.sentBottles);

  return (
    <>
      <ProfileLayout.Title>{`${currentUser.name}님을 마음에\n들어한 분들이에요`}</ProfileLayout.Title>
      <ProfileLayout.Subtitle style={{ marginTop: spacings.sm }}>
        시간 내에 보틀을 열지 않으면 사라져요
      </ProfileLayout.Subtitle>
      <section style={{ marginTop: spacings.xxl, display: 'flex', flexDirection: 'column', gap: spacings.md }}>
        {sentBottlesData.sentBottles.map(bottle => (
          <BottleCard key={bottle.id}>
            <BottleCard.TimeTag>{bottle.expiredAt}</BottleCard.TimeTag>
            <BottleCard.Introduction>{bottle.introduction[0]?.answer}</BottleCard.Introduction>
            <BottleCard.UserInformation
              {...pick(bottle, ['userName', 'age', 'mbti', 'userImageUrl', 'likeEmoji', 'lastActivatedAt'])}
            />
          </BottleCard>
        ))}
      </section>
    </>
  );
}
