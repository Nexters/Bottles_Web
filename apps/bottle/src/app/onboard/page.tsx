import { Stepper } from '../../components/stepper';

export default function OnboardPage() {
  return (
    <div>
      <Stepper current={1} max={9} />
    </div>
  );
}
