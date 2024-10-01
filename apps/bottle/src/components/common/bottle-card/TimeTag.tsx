'use client';

import { getTimeDifference } from '@/features/time/getTimeDifference';
import { Paragraph } from '@bottlesteam/ui';
import { timeTagStyle } from './bottleCardstyle.css';

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
