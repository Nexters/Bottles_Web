export interface RegionData {
  city: string;
  state: string[];
}

export interface Regions {
  regions: RegionData[];
}

export async function fetchRegionData() {
  try {
    const data: Regions = await fetch('https://api.bottles.asia/api/v1/profile/choice').then(res => res.json());
    return data.regions;
  } catch (error) {
    console.log('ERROR!!!', error);
  }
}
