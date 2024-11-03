'use client';

import BasketImage from '@/assets/images/basket.webp';
import { Asset, Button, Layout, Paragraph, spacings, Header } from '@bottlesteam/ui';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { errorImageContainer } from './layout.css';

export default function DefaultErrorPage() {
  const router = useRouter();

  return (
    <>
      <Header>
        <button onClick={router.back} style={{ background: 'none', border: 'none' }}>
          <Asset type="icon-arrow-left" />
        </button>
      </Header>
      <Layout.Contents>
        <Paragraph typography="t2" color="black100" style={{ marginTop: spacings.xl, marginBottom: spacings.xxl }}>
          {'앗, 오류가 발생했어요!\n존재하지 않는 페이지에요.'}
        </Paragraph>
        <div className={errorImageContainer}>
          <Image alt="basket" src={BasketImage} width={250} height={250} />
          <Button variant="solid" size="sm" onClick={router.back}>
            돌아가기
          </Button>
        </div>
      </Layout.Contents>
    </>
  );
}
