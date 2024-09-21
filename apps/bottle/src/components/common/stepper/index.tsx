import SlashIcon from '@/assets/icons/slash.svg';
import { Paragraph } from '@bottlesteam/ui';
import { containerStyle } from './stepperStyle.css';

interface StepperProps {
  current: number;
  max: number;
}

export function Stepper({ current, max }: StepperProps) {
  return (
    <div className={containerStyle}>
      <Paragraph typography="st2" color="purple500">
        {current}
      </Paragraph>
      <SlashIcon />
      <Paragraph typography="st2" color="purple300">
        {max}
      </Paragraph>
    </div>
  );
}
