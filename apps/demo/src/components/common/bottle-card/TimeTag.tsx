'use client';

import { Paragraph } from '@bottlesteam/ui';
import { timeTagStyle } from './bottleCardstyle.css';

export function getTimeDifference(futureDate: string) {
  const now = new Date();
  const targetDate = new Date(futureDate);

  const diff = targetDate.getTime() - now.getTime();

  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;

  return {
    hours: diffHours,
    minutes: minutes,
  };
}

function displayRemainingTime(futureDate: string) {
  const remainingTime = getTimeDifference(futureDate);

  if (remainingTime.hours > 0) {
    return `${remainingTime.hours}시간 후 사라져요`;
  }
  return `${remainingTime.minutes}분 후 사라져요`;
}

export function TimeTag({ children }: { children: string }) {
  return (
    <div className={timeTagStyle}>
      <Paragraph typography="bo" color="purple500">
        {displayRemainingTime(children)}
      </Paragraph>
    </div>
  );
}
