import { Step } from '@/features/steps/StepContainer';
import { Asset, Bubble } from '@bottlesteam/ui';

export default function Home() {
  return (
    <div>
      <Bubble>이상형이에요 🥲</Bubble>
      <div style={{ width: '100%', height: '200vh', display: 'flex', alignItems: 'flex-end', marginBottom: '300px' }}>
        <p>폰트 적용확인폰트 적용확인폰트 적용확인폰트 적용확인폰트 적용확인</p>
        <Asset type="icon-down" />
        <Asset type="icon-arrow-left" />
      </div>
      <Step.FixedButton style={{ marginBottom: '20px' }}>다음</Step.FixedButton>
    </div>
  );
}
