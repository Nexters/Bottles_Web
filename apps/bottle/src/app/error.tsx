'use client';

import BasketImage from '@/assets/images/basket.webp';
import { Header } from '@/components/common/header';
import { ProfileLayout } from '@/components/profile/layout';
import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { Asset, Button, Paragraph, spacings } from '@bottlesteam/ui';
import Image from 'next/image';
import { useEffect } from 'react';
import { errorImageContainer } from './layout.css';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function DefaultErrorPage({ error, reset }: ErrorPageProps) {
  const { send } = useAppBridge();

  useEffect(() => {
    // Log error
    console.error(error);
  }, [error]);

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
      <ProfileLayout.Contents>
        <Paragraph typography="t2" color="black100" style={{ marginTop: spacings.xl, marginBottom: spacings.xxl }}>
          {'앗, 오류가 발생했어요!\n보틀을 다시 실행해 주세요'}
        </Paragraph>
        <div className={errorImageContainer}>
          <Image alt="basket" src={BasketImage} width={250} height={250} />
          <Button variant="solid" size="sm" onClick={reset}>
            다시 시도하기
          </Button>
        </div>
      </ProfileLayout.Contents>
    </>
  );
}
