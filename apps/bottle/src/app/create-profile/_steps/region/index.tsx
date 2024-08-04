import { Stepper } from '@/components/stepper';
import { GET } from '@/features/server';
import { useFetch } from '@/features/server/useFetch';
import { Step } from '@/features/steps/StepContainer';
import { useStep } from '@/features/steps/StepProvider';
import { useUserAgent } from '@/features/web-view/UserAgentProvider';
import { webViewAPI } from '@/features/web-view/api';
import { spacings } from '@bottlesteam/ui';
import { OverlayProvider, overlay } from 'overlay-kit';
import { useState } from 'react';
import { useCreateProfileValues } from '../../CreateProfileProvider';
import { spacingStyle } from '../MBTI/MBTIStyle.css';
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

export function Region() {
  const userAgent = useUserAgent();
  const { onNextStep } = useStep();
  const { setValue, getValue } = useCreateProfileValues();

  const regionsData = useFetch<Regions>(() =>
    GET<Regions>(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/profile/choice`)
  );

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
                  ? regionsData.regions.map(({ city }) => city)
                  : (regionsData.regions.find(region => region.city === city) as RegionData).state
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
        <Stepper current={9} max={10} />
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
              webViewAPI({
                type: 'onToastOpen',
                payload: {
                  android: '전체 지역을 먼저 선택해주세요.',
                  iOS: {
                    type: 'onToastOpen',
                    message: '전체 지역을 먼저 선택해주세요.',
                  },
                },
                userAgent,
              });
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
