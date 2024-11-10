import { useEffect, useRef } from 'react';

const MILLISECONDS_PER_SECOND = 1000;

export function useDurationTime(onEnd: (duration: number) => void) {
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      timeRef.current += 1;
    }, MILLISECONDS_PER_SECOND);

    return () => {
      clearInterval(timer);
      onEnd(timeRef.current);
    };
  }, [onEnd]);

  return {};
}
