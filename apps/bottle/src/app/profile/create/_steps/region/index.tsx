import { AppBridgeMessageType, useAppBridge } from '@/features/app-bridge';
import { Step } from '@/features/steps/StepContainer';
import { useRegionsQuery } from '@/store/query/useRegionsQuery';
import { spacings } from '@bottlesteam/ui';
import { OverlayProvider, overlay } from 'overlay-kit';
import { useState } from 'react';
import { spacingStyle } from '../MBTI/MBTIStyle.css';
import { BaseFunnelComponentProps } from '../types';
import { RegionBottomSheet } from './bottom-sheet/RegionBottomSheet';
import { regionStyle } from './regionStyle.css';
import { SelectInput } from './select-input/SelectInput';

export interface RegionData {
  city: string;
  state: string[];
}

export interface Regions {
  regions: RegionData[];
}

export function Region({
  initialValue,
  onNext,
  ctaButtonText = '완료',
}: BaseFunnelComponentProps<{ city: string; state: string }>) {
  const { send } = useAppBridge();

  const { data: regionsData } = useRegionsQuery();

  const [city, setCity] = useState<string | undefined>(initialValue != null ? initialValue.city : undefined);
  const [state, setState] = useState<string | undefined>(initialValue != null ? initialValue.state : undefined);

  return (
    <>
      <OverlayProvider>
        <Step.Title>주로 생활하는 지역은 어딘가요?</Step.Title>
        <Step.Subtitle style={{ marginTop: spacings.xxl }}>전체 지역</Step.Subtitle>
        <div aria-hidden={true} className={spacingStyle} />
        <SelectInput
          onClick={async () => {
            if (regionsData == null) {
              return;
            }
            const selectedCity = await openRegionBottomSheet(
              'city',
              regionsData?.regions.map(({ city }) => city),
              city
            );
            if (selectedCity !== city) {
              setCity(selectedCity);
              setState(undefined);
            }

            if (selectedCity != null) {
              const selectedState = await openRegionBottomSheet(
                'state',
                (regionsData?.regions.find(region => region.city === selectedCity) as RegionData).state,
                state
              );
              setState(selectedState);
            }
          }}
          placeholder={'전체 지역을 선택해 주세요'}
          value={city}
        />
        <Step.Subtitle style={{ marginTop: spacings.xl }}>시 · 군 · 구</Step.Subtitle>
        <div aria-hidden={true} className={spacingStyle} />
        <SelectInput
          onClick={async () => {
            if (city === undefined) {
              send({ type: AppBridgeMessageType.TOAST_OPEN, payload: { message: '전체 지역을 먼저 선택해주세요.' } });
              return;
            }
            const selectedState = await openRegionBottomSheet(
              'state',
              (regionsData?.regions.find(region => region.city === city) as RegionData).state,
              state
            );
            setState(selectedState);
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
          onNext({ city, state });
        }}
      >
        {ctaButtonText}
      </Step.FixedButton>
    </>
  );
}

const openRegionBottomSheet = async (
  type: 'city' | 'state',
  items: string[],
  selected: string | undefined
): Promise<string | undefined> =>
  await overlay.openAsync(({ isOpen, close, unmount }) => {
    return (
      <>
        <RegionBottomSheet
          type={type}
          selected={selected}
          onSelect={close}
          isOpen={isOpen}
          onClose={unmount}
          items={items}
        />
      </>
    );
  });
