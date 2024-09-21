import { Control, toggle } from '@/components/common/control';
import { Step } from '@/features/steps/StepContainer';
import { useStep } from '@/features/steps/StepProvider';
import { EIType, JPType, SNType, TFType } from '@/models/profile/MBTI';
import { useUserInfoQuery } from '@/store/query/useUserInfoQuery';
import { Button, ButtonProps } from '@bottlesteam/ui';
import { useMemo, useState } from 'react';
import { useCreateProfileValues } from '../../CreateProfileProvider';
import { bodyStyle, buttonsContainerStyle, controlStyle } from './MBTIStyle.css';

export function MBTI() {
  const { onNextStep } = useStep();
  const { setValue, getValue } = useCreateProfileValues();
  const {
    data: { name },
  } = useUserInfoQuery();

  const selected = getValue('mbti');

  const [EI, setEI] = useState<EIType | undefined>(() => (selected != null ? (selected[0] as EIType) : undefined));
  const [SN, setSN] = useState<SNType | undefined>(selected != null ? (selected[1] as SNType) : undefined);
  const [TF, setTF] = useState<TFType | undefined>(selected != null ? (selected[2] as TFType) : undefined);
  const [JP, setJP] = useState<JPType | undefined>(selected != null ? (selected[3] as JPType) : undefined);

  const isDisabled = useMemo(() => EI == null || SN == null || TF == null || JP == null, [EI, JP, TF, SN]);

  return (
    <>
      <Step.Title>{name}님의 성격에 대해 알고 싶어요</Step.Title>
      <section className={bodyStyle}>
        <div className={controlStyle}>
          <Step.Subtitle>외향형 · 내향형</Step.Subtitle>
          <div className={buttonsContainerStyle}>
            <Control value={EI}>
              <Control.Item value={'E'} onClick={() => setEI(prev => toggle(prev, 'E'))}>
                <ItemButton aria-selected={EI === 'E'}>E</ItemButton>
              </Control.Item>
              <Control.Item value={'I'} onClick={() => setEI(prev => toggle(prev, 'I'))}>
                <ItemButton aria-selected={EI === 'I'}>I</ItemButton>
              </Control.Item>
            </Control>
          </div>
        </div>
        <div className={controlStyle}>
          <Step.Subtitle>감각형 · 직관형</Step.Subtitle>
          <div className={buttonsContainerStyle}>
            <Control value={SN}>
              <Control.Item value={'S'} onClick={() => setSN(prev => toggle(prev, 'S'))}>
                <ItemButton aria-selected={SN === 'S'}>S</ItemButton>
              </Control.Item>
              <Control.Item value={'N'} onClick={() => setSN(prev => toggle(prev, 'N'))}>
                <ItemButton aria-selected={SN === 'N'}>N</ItemButton>
              </Control.Item>
            </Control>
          </div>
        </div>
        <div className={controlStyle}>
          <Step.Subtitle>사고형 · 감정형</Step.Subtitle>
          <div className={buttonsContainerStyle}>
            <Control value={TF}>
              <Control.Item value={'T'} onClick={() => setTF(prev => toggle(prev, 'T'))}>
                <ItemButton aria-selected={TF === 'T'}>T</ItemButton>
              </Control.Item>
              <Control.Item value={'F'} onClick={() => setTF(prev => toggle(prev, 'F'))}>
                <ItemButton aria-selected={TF === 'F'}>F</ItemButton>
              </Control.Item>
            </Control>
          </div>
        </div>
        <div className={controlStyle}>
          <Step.Subtitle>판단형 · 인식형</Step.Subtitle>
          <div className={buttonsContainerStyle}>
            <Control value={JP}>
              <Control.Item value={'J'} onClick={() => setJP(prev => toggle(prev, 'J'))}>
                <ItemButton aria-selected={JP === 'J'}>J</ItemButton>
              </Control.Item>
              <Control.Item value={'P'} onClick={() => setJP(prev => toggle(prev, 'P'))}>
                <ItemButton aria-selected={JP === 'P'}>P</ItemButton>
              </Control.Item>
            </Control>
          </div>
        </div>
      </section>
      <Step.FixedButton
        disabled={isDisabled}
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
    </>
  );
}

function ItemButton(props: Omit<ButtonProps, 'variant' | 'size'>) {
  return (
    <Button variant="outlined" size="md" selected={props.selected} style={{ flex: 1 }} {...props}>
      {props.children}
    </Button>
  );
}
