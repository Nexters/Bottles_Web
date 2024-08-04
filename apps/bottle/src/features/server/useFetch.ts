import { useEffect, useState } from 'react';

export function useFetch<Data>(fetchFn: () => Promise<Data>) {
  const [error, setError] = useState(false);
  const [data, setData] = useState<Data>();
  //TODO: handle loading state

  useEffect(() => {
    async function fetch() {
      try {
        const data = await fetchFn();
        setData(data);
      } catch (error) {
        setError(true);
      }
    }
    fetch();
  }, []);

  if (error) {
    throw new Error('ERROR!');
  }

  return data;
}
