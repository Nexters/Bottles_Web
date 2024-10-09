'use client';

import CoconutImage from '@/assets/images/coconut.webp';
import { BottleCard } from '@/components/common/bottle-card';
import { Fallback } from '@/components/common/fallback';
import { ProfileLayout } from '@/components/profile/layout';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { buildWebViewUrl } from '@/features/app-bridge/utils';
import { useSentBottlesQuery } from '@/store/query/useSentBottlesQuery';
import { useUserInfoQuery } from '@/store/query/useUserInfoQuery';
import { spacings } from '@bottlesteam/ui';
import { pick } from 'es-toolkit';

export function Sents() {
  const { send } = useAppBridge();
  const { data: currentUser } = useUserInfoQuery();
  const {
    data: { sentBottles },
  } = useSentBottlesQuery();

  return (
    <>
      {sentBottles.length > 0 ? (
        <>
          <ProfileLayout.Title
            style={{ marginTop: 72 }}
          >{`${currentUser.name}님을 마음에\n들어한 분들이에요`}</ProfileLayout.Title>
          <ProfileLayout.Subtitle style={{ marginTop: spacings.sm }}>
            시간 내에 보틀을 열지 않으면 사라져요
          </ProfileLayout.Subtitle>
          <section style={{ marginTop: spacings.xxl, display: 'flex', flexDirection: 'column', gap: spacings.md }}>
            {sentBottles.map(bottle => (
              <BottleCard
                key={bottle.id}
                onClick={() => {
                  send({
                    type: AppBridgeMessageType.OPEN_LINK,
                    payload: {
                      url: buildWebViewUrl(`bottle/sent/${bottle.id}`),
                    },
                  });
                }}
              >
                <BottleCard.TimeTag>{bottle.expiredAt}</BottleCard.TimeTag>
                <BottleCard.Introduction>{bottle.introduction[0]?.answer}</BottleCard.Introduction>
                <BottleCard.UserInformation
                  {...pick(bottle, ['userName', 'age', 'mbti', 'userImageUrl', 'likeEmoji', 'lastActivatedAt'])}
                />
              </BottleCard>
            ))}
          </section>
        </>
      ) : (
        <Fallback marginTop={142}>
          <Fallback.Image src={CoconutImage} alt="fallback image" />
          <Fallback.Title>조금만 기다려 볼까요?</Fallback.Title>
          <Fallback.Subtitle>나를 마음에 들어할 상대는 누굴까요 👀</Fallback.Subtitle>
        </Fallback>
      )}
    </>
  );
}
