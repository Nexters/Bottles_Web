'use client';

import NO_BOTTLE_IMAGE from '@/assets/no-bottle.webp';
import { Control } from '@/components/control';
import { Header } from '@/components/header';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { Asset, Button, Paragraph } from '@bottlesteam/ui';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BottlesList } from './_components/BottlesList';
import { contentsContainer, controlStyle } from './pageStyle.css';

export type BottleType = 'random' | 'sent';

export function Bottles() {
  const { send } = useAppBridge();
  const [type, setType] = useState<BottleType>('random');

  return (
    <>
      <Header>
        <button
          onClick={() => send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE })}
          style={{ background: 'none', border: 'none' }}
        >
          <Asset type="icon-arrow-left" />
        </button>
      </Header>
      <div className={contentsContainer}>
        <Control value={type}>
          <div className={controlStyle}>
            <Control.Item onClick={() => setType('random')} value={'random'}>
              <Button variant="outlined" size="sm">
                떠다니는 보틀
              </Button>
            </Control.Item>
            <Control.Item onClick={() => setType('sent')} value={'sent'}>
              <Button variant="outlined" size="sm">
                마음이 담긴 보틀
              </Button>
            </Control.Item>
          </div>
        </Control>
        <BottlesList
          top={data => (
            <BottlesList.Top>
              {name => (
                <Paragraph typography="t1" color="black100">
                  {type === 'random'
                    ? data.randomBottles?.length > 0
                      ? `${name}님에게\n추천하는 분들이에요!`
                      : '아직 주변에 새로운\n보틀이 없어요'
                    : data.sentBottles?.length > 0
                      ? `${name}님을 마음에\n들어한 분들이에요`
                      : '아직 받은 보틀이 없어요'}
                </Paragraph>
              )}
            </BottlesList.Top>
          )}
        >
          {data => {
            const bottles = type === 'random' ? data.randomBottles : data.sentBottles;
            return bottles.length === 0 ? (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Image src={NO_BOTTLE_IMAGE} alt="no bottle" width={250} height={250} />
              </div>
            ) : (
              bottles?.map(bottle => (
                <Link key={bottle.id} href={`/bottles/${type}/${bottle.id}`}>
                  <BottlesList.Item bottle={bottle} />
                </Link>
              ))
            );
          }}
        </BottlesList>
      </div>
    </>
  );
}
