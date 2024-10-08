import { boxStyle, footerStyle } from '../../app/layout.css';
import { Text } from '../text/Text';

export function Footer() {
  return (
    <footer className={footerStyle}>
      <div className={boxStyle({ margin: 'large' })}>
        <Text typography="t2">보틀즈</Text>
      </div>
      <div className={boxStyle({ margin: 'normal' })}>
        <Text typography="t1">서울특별시 송파구 잠실동 217-7 303호</Text>
      </div>
      <div className={boxStyle({ margin: 'normal' })}>
        <Text typography="t1">사업자번호 654-11-02572</Text>
      </div>
      <div className={boxStyle({ margin: 'normal' })}>
        <Text typography="t1">문의 bottles.developer@gmail.com</Text>
      </div>
      <div className={boxStyle({ margin: 'normal' })}>
        <Text typography="t1">Copyright © Bottles Corp. All rights reserved</Text>
      </div>
    </footer>
  );
}
