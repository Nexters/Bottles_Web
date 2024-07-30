export interface RegionData {
  city: string;
  state: string[];
}

export interface Regions {
  regions: RegionData[];
}

export async function fetchRegionData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/profile/choice1`);
  console.log('res', response);
  if (response.status !== 200) {
    return 'Error';
  }
  const data: Regions = await response.json();
  console.log('data', data);
  return data.regions;
}
