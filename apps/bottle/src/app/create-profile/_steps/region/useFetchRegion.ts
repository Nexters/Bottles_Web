import { STATUS } from '@/features/server/types';
import { GET } from '@/features/server/utils';
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
        const response = await GET(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/profile/choice`);
        if (response.status !== STATUS.SUCCESS) {
          throw new Error();
        }
        const data: Regions = await response.json();

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
