import { useEffect, useState } from 'react';
import { RegionData, Regions } from './fetchRegion';

export function useFetchRegions() {
  const [regionsData, setRegionsData] = useState<RegionData[]>();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRegions() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/profile/choice`);
        if (!response.ok) {
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
