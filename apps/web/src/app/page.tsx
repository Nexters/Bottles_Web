import Image from 'next/image';
import { Text } from './Text';
import BottleImage from './bottles.png';
import { boxStyle, footerStyle, layoutStyle, mainStyle } from './layout.css';

export default function Home() {
  return (
    <div className={layoutStyle}>
      <main className={mainStyle}>
        <div style={{ marginTop: '60px', marginBottom: '50px' }}>
          <h3>{'"인연을 찾는 가장 빠르고 쉬운 방법"'}</h3>
        </div>
        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ fontSize: '50px' }}>Bottle</h1>
        </div>
        <h3 style={{ marginBottom: '30px' }}>너에게 보내는 편지</h3>
        <Image src={BottleImage} alt="사랑의 병" width={350} height={280} />
      </main>
      <footer className={footerStyle}>
        <div className={boxStyle({ margin: 'large' })}>
          <Text typography="t2">보틀즈</Text>
        </div>
        <div className={boxStyle({ margin: 'normal' })}>
          <Text typography="t1">서울특별시 송파구 잠실동 217-7 301호</Text>
        </div>
        <div className={boxStyle({ margin: 'normal' })}>
          <Text typography="t1">대표 손인준 | 사업자번호 654-11-02572</Text>
        </div>
        <div className={boxStyle({ margin: 'normal' })}>
          <Text typography="t1">문의 injun1994@naver.com</Text>
        </div>
        <div className={boxStyle({ margin: 'normal' })}>
          <Text typography="t1">Copyright © Bottles Corp. All rights reserved</Text>
        </div>
      </footer>
    </div>
  );
}
