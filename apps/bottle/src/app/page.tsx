import { Asset } from '@bottlesteam/ui';
import { layoutStyle } from './layout.css';
export default function Home() {
  return (
    <main className={layoutStyle}>
      폰트 적용확인
      <Asset type="icon-down" />
      <Asset type="icon-arrow-left" />
    </main>
  );
}
