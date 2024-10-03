'use client';

import TelescopeImage from '@/assets/images/telescope.webp';
import { BottleCard } from '@/components/common/bottle-card';
import { Fallback } from '@/components/common/fallback';
import { ProfileLayout } from '@/components/profile/layout';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { buildWebViewUrl } from '@/features/app-bridge/utils';
import { useRecommendationBottlesQuery } from '@/store/query/useRecommendationBottlesQuery';
import { useUserInfoQuery } from '@/store/query/useUserInfoQuery';
import { spacings } from '@bottlesteam/ui';
import { pick } from 'es-toolkit';

export function Recommendations() {
  const { send } = useAppBridge();
  const { data: currentUser } = useUserInfoQuery();
  const {
    data: { randomBottles },
  } = useRecommendationBottlesQuery();

  return (
    <>
      {randomBottles.length > 0 ? (
        <>
          <ProfileLayout.Title>{`${currentUser.name}님에게\n추천하는 분들이에요!`}</ProfileLayout.Title>
          <ProfileLayout.Subtitle style={{ marginTop: spacings.sm }}>
            시간이 지나면 새로운 분들을 추천해 드려요
          </ProfileLayout.Subtitle>
          <section style={{ marginTop: spacings.xxl, display: 'flex', flexDirection: 'column', gap: spacings.md }}>
            {randomBottles.map(bottle => (
              <BottleCard
                key={bottle.id}
                onClick={() => {
                  send({
                    type: AppBridgeMessageType.OPEN_LINK,
                    payload: {
                      url: buildWebViewUrl(`bottle/recommendation/${bottle.id}`),
                    },
                  });
                }}
              >
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
          <Fallback.Subtitle>{`보틀은 ${currentUser.name}님과 케미가 통하는\n상대를 엄선해 추천드리고 있어요`}</Fallback.Subtitle>
        </Fallback>
      )}
    </>
  );
}
