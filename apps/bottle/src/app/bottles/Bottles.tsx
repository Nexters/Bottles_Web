'use client';

import { Control } from '@/components/control';
import { Header } from '@/components/header';
import { useUserAgent } from '@/features/web-view/UserAgentProvider';
import { webViewAPI } from '@/features/web-view/api';
import { Asset, Button, Paragraph } from '@bottlesteam/ui';
import Link from 'next/link';
import { useState } from 'react';
import { BottlesList } from './_components/BottlesList';
import { contentsContainer, controlStyle } from './pageStyle.css';

export type BottleType = 'random' | 'sent';

export function Bottles() {
  const userAgent = useUserAgent();
  const [type, setType] = useState<BottleType>('random');

  return (
    <>
      <Header>
        <button
          onClick={() => {
            webViewAPI({ type: 'onWebViewClose', payload: { iOS: { type: 'onWebViewClose' } }, userAgent });
          }}
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
                <>
                  <Paragraph typography="t1" color="black100">
                    {type === 'random'
                      ? data.randomBottles?.length > 0
                        ? `${name}님에게\n추천하는 분들이에요!`
                        : '아직 주변에 새로운\n보틀이 없어요'
                      : data.sentBottles?.length > 0
                        ? `${name}님을 마음에\n들어한 분들이에요`
                        : '아직 받은 보틀이 없어요'}
                  </Paragraph>
                  <Paragraph typography="bo" color="neutral600">
                    {type === 'random'
                      ? '시간이 지나면 새로운 분들을 추천해 드려요'
                      : '시간 내에 보틀을 열지 않으면 사라져요'}
                  </Paragraph>
                </>
              )}
            </BottlesList.Top>
          )}
        >
          {/**
           * TODO: Add graphic resource when there are no bottles to show
           */}
          {data =>
            (type === 'random' ? data.randomBottles : data.sentBottles)?.map(bottle => (
              <Link key={bottle.id} href={`/bottles/${type}/${bottle.id}`}>
                <BottlesList.Item bottle={bottle} />
              </Link>
            ))
          }
        </BottlesList>
      </div>
    </>
  );
}
