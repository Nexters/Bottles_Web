import { useCallback, useEffect, useState } from 'react';

const MILLISECONDS_PER_SECOND = 1000;

// TODO: test useTimer
export function useTimer(time: number) {
  const [count, setCount] = useState(false);
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    if (!count) {
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        return prev === 0 ? 0 : prev - 1;
      });
    }, MILLISECONDS_PER_SECOND);

    return () => clearInterval(timer);
  }, [count]);

  useEffect(() => {
    if (timeLeft === 0) {
      setCount(false);
    }
  }, [timeLeft]);

  const start = useCallback(() => {
    setCount(true);
  }, []);

  return { start, timeLeft };
}
