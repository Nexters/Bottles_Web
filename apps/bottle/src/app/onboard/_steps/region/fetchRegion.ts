import { responseData } from './mock';

export interface RegionData {
  city: string;
  state: string[];
}

export interface Regions {
  regions: RegionData[];
}

export async function fetchRegionData() {
  // TODO:서버에서 데이터 패칭
  //   const res = await fetch('https://api.bottles.asia/api/v1/profile/choice');
  const response: Promise<Regions> = new Promise(resolve => {
    setTimeout(() => {
      resolve(responseData);
    }, 1500);
  });

  return (await response).regions;
}
