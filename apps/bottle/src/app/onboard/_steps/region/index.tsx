import { spacings } from '@bottlesteam/ui';
import { OverlayProvider, overlay } from 'overlay-kit';
import { useEffect, useState } from 'react';
import { Stepper } from '../../../../components/stepper';
import { useOnboardingValues } from '../../OnboardingProvider';
import { useStep } from '../../StepProvider';
import { Step } from '../../_step/StepContainer';
import { RegionBottomSheet } from './RegionBottomSheet';
import { RegionData, fetchRegionData } from './fetchRegion';
import { regionStyle } from './regionStyle.css';
import { SelectInput } from './select-input/SelectInput';

export function Region() {
  const { setValue } = useOnboardingValues();
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
        <Step.Subtitle style={{ marginTop: spacings.xxl, marginBottom: spacings.sm }}>전체 지역</Step.Subtitle>
        <SelectInput
          onClick={() => openRegionBottomSheet('city')}
          placeholder={'전체 지역을 선택해 주세요'}
          value={city}
          style={{ marginTop: spacings.sm }}
        />
        <Step.Subtitle style={{ marginTop: spacings.xl, marginBottom: spacings.sm }}>시 · 군 · 구</Step.Subtitle>
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
          style={{ marginTop: spacings.sm }}
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
