import { Control, toggle } from '@/components/control';
import { Stepper } from '@/components/stepper';
import { Step } from '@/features/steps/StepContainer';
import { Button, ButtonProps } from '@bottlesteam/ui';
import { useState } from 'react';
import { bodyStyle, buttonsContainerStyle, controlStyle } from './MBTIStyle.css';

type EIType = 'E' | 'I';
type SNType = 'S' | 'N';
type TFType = 'T' | 'F';
type JPType = 'J' | 'P';

export function MBTI() {
  const [EI, setEI] = useState<EIType>();
  const [SN, setSN] = useState<SNType>();
  const [TF, setTF] = useState<TFType>();
  const [JP, setJP] = useState<JPType>();

  return (
    <Step>
      <Stepper current={1} max={9} />
      <Step.Title>OO님의 성격에 대해 알고 싶어요</Step.Title>
      <section className={bodyStyle}>
        <div className={controlStyle}>
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
        </div>
        <div className={controlStyle}>
          <Step.Subtitle>감각형 · 직관형</Step.Subtitle>
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
        </div>
        <div className={controlStyle}>
          <Step.Subtitle>사고형 · 감정형</Step.Subtitle>
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
        </div>
        <div className={controlStyle}>
          <Step.Subtitle>판단형 · 인식형</Step.Subtitle>
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
        </div>
      </section>
      {/* <Step.FixedButton
        disabled={isDisabled}
        onClick={() => {
          if (isDisabled) {
            return;
          }
          setValue('mbti', `${EI}${SN}${TF}${JP}`);
          onNextStep();
        }}
      >
        다음
      </Step.FixedButton> */}
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
