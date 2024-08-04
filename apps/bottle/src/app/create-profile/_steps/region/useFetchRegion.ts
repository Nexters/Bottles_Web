import { GET } from '@/features/server';
import { useEffect, useState } from 'react';

export interface RegionData {
  city: string;
  state: string[];
}

export interface Regions {
  regions: RegionData[];
}

export function useFetchRegions() {
  const [regionsData, setRegionsData] = useState<RegionData[]>();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRegions() {
      try {
        const data = await GET<Regions>(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/profile/choice`);
        setRegionsData(data.regions);
      } catch (error) {
        setError(true);
      }
    }
    fetchRegions();
  }, []);

  if (error) {
    throw new Error('Error at fetchRegions');
  }

  return regionsData;
}
