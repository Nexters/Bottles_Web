import SlashIcon from '@/assets/icons/slash.svg';
import { Paragraph } from '@bottlesteam/ui';
import { CSSProperties } from 'react';
import { containerStyle } from './stepperStyle.css';

interface StepperProps {
  current: number;
  max: number;
  style?: CSSProperties;
}

export function Stepper({ current, max, style }: StepperProps) {
  return (
    <div className={containerStyle} style={style}>
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
