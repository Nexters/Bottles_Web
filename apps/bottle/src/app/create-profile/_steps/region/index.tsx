import { Stepper } from '@/components/stepper';
import { Step } from '@/features/steps/StepContainer';
import { useStep } from '@/features/steps/StepProvider';
import { spacings } from '@bottlesteam/ui';
import { OverlayProvider, overlay } from 'overlay-kit';
import { useEffect, useState } from 'react';
import { useCreateProfileValues } from '../../CreateProfileProvider';
import { spacingStyle } from '../MBTI/MBTIStyle.css';
import { RegionBottomSheet } from './RegionBottomSheet';
import { RegionData, fetchRegionData } from './fetchRegion';
import { regionStyle } from './regionStyle.css';
import { SelectInput } from './select-input/SelectInput';

export function Region() {
  const { setValue } = useCreateProfileValues();
  const { onNextStep } = useStep();

  const [regionsData, setRegionsData] = useState<RegionData[]>();
  const [city, setCity] = useState<string>();
  const [state, setState] = useState<string>();

  const openRegionBottomSheet = (type: 'city' | 'state') => {
    overlay.open(({ isOpen, close }) => {
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
              onClose={close}
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

  useEffect(() => {
    async function fetch() {
      const response = await fetchRegionData();
      setRegionsData(response);
    }

    fetch();
  }, []);

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
        onClick={() => {
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
