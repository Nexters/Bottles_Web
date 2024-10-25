import { useEffect, useState } from 'react';
import { bottleStorage, Key } from './bottleStorage';

export function useGetBottleStorage<T>(key: Key): T | undefined;
export function useGetBottleStorage<T>(key: Key, placeholder: T): T;
export function useGetBottleStorage<T>(key: Key, placeholder?: T) {
  const [value, setValue] = useState(placeholder);

  useEffect(() => {
    /**
     * get item from bottleStorage in useEffect to prevent RSC, SSR error
     */
    const getItem = () => {
      setValue(bottleStorage.getItem(key) as T | undefined);
    };

    getItem();

    window.addEventListener('storage', getItem);

    return () => removeEventListener('storage', getItem);
  }, [key]);

  return value;
}
