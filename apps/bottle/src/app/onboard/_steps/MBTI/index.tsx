import { Button, ButtonProps } from '@bottlesteam/ui';
import { useState } from 'react';
import { Control, toggle } from '../../../../components/control';
import { Stepper } from '../../../../components/stepper';
import { useOnboardingValues } from '../../OnboardingProvider';
import { useStep } from '../../StepProvider';
import { Step } from '../../_step/StepContainer';
import { bodyStyle, buttonsContainerStyle } from './MBTIStyle.css';

type EIType = 'E' | 'I';
type SNType = 'S' | 'N';
type TFType = 'T' | 'F';
type JPType = 'J' | 'P';

export function MBTI() {
  const { onNextStep } = useStep();
  const { setValue } = useOnboardingValues();

  const [EI, setEI] = useState<EIType | undefined>();
  const [SN, setSN] = useState<SNType | undefined>();
  const [TF, setTF] = useState<TFType>();
  const [JP, setJP] = useState<JPType>();

  return (
    <Step>
      <Stepper current={1} max={9} />
      <Step.Title>OO님의 성격에 대해 알고 싶어요</Step.Title>
      <section className={bodyStyle}>
        <Step.Subtitle>외향형 · 내향형</Step.Subtitle>
        <div className={buttonsContainerStyle}>
          <Control value={EI}>
            <Control.Item value={'E'} onClick={() => setEI(prev => toggle(prev, 'E'))}>
              <ItemButton>E</ItemButton>
            </Control.Item>
            <Control.Item value={'I'} onClick={() => setEI(prev => toggle(prev, 'I'))}>
              <ItemButton>I</ItemButton>
            </Control.Item>
          </Control>
        </div>
        <div className={buttonsContainerStyle}>
          <Control value={SN}>
            <Control.Item value={'S'} onClick={() => setSN(prev => toggle(prev, 'S'))}>
              <ItemButton>S</ItemButton>
            </Control.Item>
            <Control.Item value={'N'} onClick={() => setSN(prev => toggle(prev, 'N'))}>
              <ItemButton>N</ItemButton>
            </Control.Item>
          </Control>
        </div>
        <div className={buttonsContainerStyle}>
          <Control value={TF}>
            <Control.Item value={'T'} onClick={() => setTF(prev => toggle(prev, 'T'))}>
              <ItemButton>T</ItemButton>
            </Control.Item>
            <Control.Item value={'F'} onClick={() => setTF(prev => toggle(prev, 'F'))}>
              <ItemButton>F</ItemButton>
            </Control.Item>
          </Control>
        </div>
        <div className={buttonsContainerStyle}>
          <Control value={JP}>
            <Control.Item value={'J'} onClick={() => setJP(prev => toggle(prev, 'J'))}>
              <ItemButton>J</ItemButton>
            </Control.Item>
            <Control.Item value={'P'} onClick={() => setJP(prev => toggle(prev, 'P'))}>
              <ItemButton>P</ItemButton>
            </Control.Item>
          </Control>
        </div>
      </section>
      <Step.FixedButton
        disabled={EI == null || SN == null || TF == null || JP == null}
        onClick={() => {
          if (EI == null || SN == null || TF == null || JP == null) {
            return;
          }
          setValue('mbti', `${EI}${SN}${TF}${JP}`);
          onNextStep();
        }}
      >
        다음
      </Step.FixedButton>
    </Step>
  );
}

function ItemButton(props: Omit<ButtonProps, 'variant' | 'size'>) {
  return (
    <Button variant="outlined" size="md" selected={props.selected} style={{ flex: 1 }} {...props}>
      {props.children}
    </Button>
  );
}
