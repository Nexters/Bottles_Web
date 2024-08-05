'use client';

import { Control } from '@/components/control';
import { Header } from '@/components/header';
import { Asset, Button, Paragraph } from '@bottlesteam/ui';
import { useState } from 'react';
import { BottleListItem } from './_components/BottleListItem';
import { contentsContainer, controlStyle, listStyle, titleStyle } from './pageStyle.css';

type Type = '떠다니는 보틀' | '마음이 담긴 보틀';

export default function BottlesPage() {
  const [type, setType] = useState<Type>('떠다니는 보틀');

  // FIXME: 실제 서버로부터 가져오기
  const name = '황태환';

  const title =
    type === '떠다니는 보틀' ? `${name}님에게\n추천하는 분들이에요!` : `${name}님을 마음에\n들어한 분들이에요`;
  const description =
    type === '떠다니는 보틀' ? '시간이 지나면 새로운 분들을 추천해 드려요' : '시간 내에 보틀을 열지 않으면 사라져요';

  return (
    <>
      <Header>
        <button style={{ background: 'none', border: 'none' }}>
          <Asset onClick={() => {}} type="icon-arrow-left" />
        </button>
      </Header>
      <div className={contentsContainer}>
        <Control value={type}>
          <div className={controlStyle}>
            <Control.Item onClick={() => setType('떠다니는 보틀')} value={'떠다니는 보틀'}>
              <Button variant="outlined" size="sm">
                떠다니는 보틀
              </Button>
            </Control.Item>
            <Control.Item onClick={() => setType('마음이 담긴 보틀')} value={'마음이 담긴 보틀'}>
              <Button variant="outlined" size="sm">
                마음이 담긴 보틀
              </Button>
            </Control.Item>
          </div>
        </Control>
        <div className={titleStyle}>
          <Paragraph typography="t1" color="black100">
            {title}
          </Paragraph>
          <Paragraph typography="bo" color="neutral600">
            {description}
          </Paragraph>
        </div>
        <ul className={listStyle}>
          <BottleListItem />
          <BottleListItem />
          <BottleListItem />
          <BottleListItem />
          <BottleListItem />
          <BottleListItem />
          <BottleListItem />
          <BottleListItem />
          <BottleListItem />
          <BottleListItem />
        </ul>
      </div>
    </>
  );
}
