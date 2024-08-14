'use client';

import BasketImage from '@/assets/basket.webp';
import { Header } from '@/components/header';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { Asset, Button, Paragraph, spacings } from '@bottlesteam/ui';
import Image from 'next/image';
import { errorImageContainer } from './layout.css';

export default function DefaultErrorPage() {
  const { send } = useAppBridge();

  const closeWebView = () => send({ type: AppBridgeMessageType.WEB_VIEW_CLOSE });

  return (
    <>
      <Header>
        <button onClick={closeWebView} style={{ background: 'none', border: 'none' }}>
          <Asset type="icon-arrow-left" />
        </button>
      </Header>
      <Paragraph typography="t2" color="black100" style={{ marginTop: spacings.xl, marginBottom: spacings.xxl }}>
        {'앗, 오류가 발생했어요!\n존재하지 않는 페이지에요.'}
      </Paragraph>
      <div className={errorImageContainer}>
        <Image alt="basket" src={BasketImage} width={250} height={250} />
        <Button variant="solid" size="sm" onClick={closeWebView}>
          돌아가기
        </Button>
      </div>
    </>
  );
}
