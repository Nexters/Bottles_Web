'use client';

import TelescopeImage from '@/assets/images/telescope.webp';
import { BottleCard } from '@/components/common/bottle-card';
import { Fallback } from '@/components/common/fallback';
import { Layout, spacings } from '@bottlesteam/ui';
import { pick } from 'es-toolkit';
import { RandomBottlesQuery, UserInfo } from './page';

interface Props {
  bottles: RandomBottlesQuery;
  userInfo: UserInfo;
}

export function Bottles({ bottles: { randomBottles }, userInfo }: Props) {
  return (
    <Layout.Contents>
      {randomBottles.length > 0 ? (
        <>
          <Layout.Title>{`${userInfo.name}님에게\n추천하는 분들이에요!`}</Layout.Title>
          <section style={{ marginTop: spacings.xxl, display: 'flex', flexDirection: 'column', gap: spacings.md }}>
            {randomBottles.map(bottle => (
              <BottleCard key={bottle.id} onClick={() => {}}>
                <BottleCard.TimeTag>{bottle.expiredAt}</BottleCard.TimeTag>
                <BottleCard.Introduction>{bottle.introduction[0]?.answer}</BottleCard.Introduction>
                <BottleCard.UserInformation
                  {...pick(bottle, ['userName', 'age', 'mbti', 'userImageUrl', 'lastActivatedAt'])}
                />
              </BottleCard>
            ))}
          </section>
        </>
      ) : (
        <Fallback marginTop={94}>
          <Fallback.Image src={TelescopeImage} alt="fallback image" />
          <Fallback.Title>꼭 맞는 상대를 찾는 중이에요</Fallback.Title>
          <Fallback.Subtitle>{`보틀은 ${userInfo.name}님과 케미가 통하는\n상대를 엄선해 추천드리고 있어요`}</Fallback.Subtitle>
        </Fallback>
      )}
    </Layout.Contents>
  );
}
