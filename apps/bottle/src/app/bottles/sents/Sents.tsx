'use client';

import CoconutImage from '@/assets/images/coconut.webp';
import { BottleCard } from '@/components/common/bottle-card';
import { BottleCardB } from '@/components/common/bottle-card-b';
import { Fallback } from '@/components/common/fallback';
import { ProfileLayout } from '@/components/profile/layout';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { buildWebViewUrl } from '@/features/app-bridge/utils';
import { useSentBottlesQuery } from '@/store/query/useSentBottlesQuery';
import { useUserInfoQuery } from '@/store/query/useUserInfoQuery';
import { spacings } from '@bottlesteam/ui';
import { sendGAEvent } from '@next/third-parties/google';
import { pick } from 'es-toolkit';
import { useSearchParams } from 'next/navigation';
import { Fragment } from 'react';
import { GAExposureEventWrapper } from './GAExposureEventWrapper';

// NOTE: For AB test
export type ABType = 'A' | 'B';
export const AB_TEST_SEARCH_KEY = 'ab-type';

export function Sents() {
  const searchParams = useSearchParams();
  const abType: ABType = (searchParams.get(AB_TEST_SEARCH_KEY) as ABType | null) ?? 'A';

  const { send } = useAppBridge();
  const { data: currentUser } = useUserInfoQuery();
  const {
    data: { sentBottles },
  } = useSentBottlesQuery();

  return (
    <ProfileLayout.Contents>
      {sentBottles.length > 0 ? (
        <>
          <ProfileLayout.Title
            style={{ marginTop: 72 }}
          >{`${currentUser.name}님을 마음에\n들어한 분들이에요`}</ProfileLayout.Title>
          <ProfileLayout.Subtitle style={{ marginTop: spacings.sm }}>
            시간 내에 보틀을 열지 않으면 사라져요
          </ProfileLayout.Subtitle>
          <section style={{ marginTop: spacings.xxl, display: 'flex', flexDirection: 'column', gap: spacings.md }}>
            {/*TODO: fix after AB test*/}
            {sentBottles.map(bottle => (
              <Fragment key={bottle.id}>
                {abType === 'A' ? (
                  <GAExposureEventWrapper type={abType}>
                    <BottleCard
                      onClick={() => {
                        sendGAEvent('event', `bottle_click_${abType}`, { value: '보틀 클릭', type: abType });
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
                  </GAExposureEventWrapper>
                ) : (
                  <GAExposureEventWrapper type={abType}>
                    <BottleCardB
                      onClick={() => {
                        sendGAEvent('event', `bottle_click_${abType}`, { value: '보틀 클릭', type: abType });
                        send({
                          type: AppBridgeMessageType.OPEN_LINK,
                          payload: {
                            url: buildWebViewUrl(`bottle/sent/${bottle.id}`),
                          },
                        });
                      }}
                      bottle={bottle}
                    />
                  </GAExposureEventWrapper>
                )}
              </Fragment>
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
    </ProfileLayout.Contents>
  );
}
