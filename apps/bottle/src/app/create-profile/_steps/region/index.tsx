import { Stepper } from '@/components/stepper';
import { Step } from '@/features/steps/StepContainer';
import { useStep } from '@/features/steps/StepProvider';
import { spacings } from '@bottlesteam/ui';
import { OverlayProvider, overlay } from 'overlay-kit';
import { useState } from 'react';
import { useCreateProfileValues } from '../../CreateProfileProvider';
import { spacingStyle } from '../MBTI/MBTIStyle.css';
import { RegionBottomSheet } from './bottom-sheet/RegionBottomSheet';
import { regionStyle } from './regionStyle.css';
import { SelectInput } from './select-input/SelectInput';
import { RegionData, useFetchRegions } from './useFetchRegion';

export function Region() {
  const { onNextStep } = useStep();
  const { setValue, getValue } = useCreateProfileValues();

  const regionsData = useFetchRegions();

  const selected = getValue('region');
  const [city, setCity] = useState<string | undefined>(selected != null ? selected.city : undefined);
  const [state, setState] = useState<string | undefined>(selected != null ? selected.state : undefined);

  const openRegionBottomSheet = (type: 'city' | 'state') => {
    overlay.open(({ isOpen, unmount }) => {
      return (
        <>
          {regionsData && (
            <RegionBottomSheet
              type={type}
              selected={type === 'city' ? city : state}
              onSelect={(item: string) => {
                type === 'city' ? setCity(item) : setState(item);
                type === 'city' && city !== item && setState(undefined);
              }}
              isOpen={isOpen}
              onClose={unmount}
              items={
                type === 'city'
                  ? regionsData.map(({ city }) => city)
                  : (regionsData.find(region => region.city === city) as RegionData).state
              }
            />
          )}
        </>
      );
    });
  };

  return (
    <Step>
      <OverlayProvider>
        <Stepper current={9} max={9} />
        <Step.Title>주로 생활하는 지역은 어딘가요?</Step.Title>
        <Step.Subtitle style={{ marginTop: spacings.xxl }}>전체 지역</Step.Subtitle>
        <div aria-hidden={true} className={spacingStyle} />
        <SelectInput
          onClick={() => openRegionBottomSheet('city')}
          placeholder={'전체 지역을 선택해 주세요'}
          value={city}
        />
        <Step.Subtitle style={{ marginTop: spacings.xl }}>시 · 군 · 구</Step.Subtitle>
        <div aria-hidden={true} className={spacingStyle} />
        <SelectInput
          onClick={() => {
            if (city === undefined) {
              alert('전체 지역을 먼저 선택해주세요.');
              return;
            }
            openRegionBottomSheet('state');
          }}
          placeholder={'상세 지역을 선택해 주세요'}
          value={state}
        />
        <section className={regionStyle}></section>
      </OverlayProvider>
      <Step.FixedButton
        disabled={city === undefined || state === undefined}
        onClick={async () => {
          if (city === undefined || state === undefined) {
            return;
          }
          setValue('region', { city, state });
          onNextStep();
        }}
      >
        다음
      </Step.FixedButton>
    </Step>
  );
}
