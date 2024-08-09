import { useTimer } from '@/features/time/useTimer';

const MAX_SECONDS = 180;
const SECONDS_PER_MINUTE = 60;

export function useLeftTimeCaption() {
  const { timeLeft, start } = useTimer(MAX_SECONDS);
  const minutesCaption = Math.floor(timeLeft / SECONDS_PER_MINUTE);
  const secondsCaption = timeLeft - minutesCaption * SECONDS_PER_MINUTE;
  const timeCaption = `${minutesCaption}:${secondsCaption.toString().padStart(2, '0')}`;

  return { startTimer: start, timeCaption };
}
