import { useEffect, useRef } from 'react';

const MILLISECONDS_PER_SECOND = 1000;

export function useDurationTime() {
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      timeRef.current += 1;
    }, MILLISECONDS_PER_SECOND);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return { getTime: () => timeRef.current };
}
