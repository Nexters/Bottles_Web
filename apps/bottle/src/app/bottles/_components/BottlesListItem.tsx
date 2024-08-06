import { Bottle } from '@/features/query/useBottlesQuery';
import { getTimeDifference } from '@/features/time/getTimeDifference';
import { Paragraph, spacings, Asset } from '@bottlesteam/ui';
import Image from 'next/image';
import { itemStyle, timeLabelStyle, userInfoContainerStyle, userInfoStyle } from './bottlesListStyle.css';

interface Props {
  bottle: Bottle;
  onClick: () => void;
}

export function BottlesListItem({ bottle, onClick }: Props) {
  return (
    <li key={bottle.id} className={itemStyle} onClick={onClick}>
      <div className={timeLabelStyle}>
        <Paragraph typography="bo" color="purple500">
          {displayRemainingTime(bottle.expiredAt)}
        </Paragraph>
      </div>
      <div className={userInfoContainerStyle}>
        <div className={userInfoStyle}>
          <Paragraph typography="t2" color="neutral900" style={{ width: 'fit-content' }}>
            {bottle.userName}
          </Paragraph>
          <Paragraph
            typography="ca"
            color="neutral600"
            style={{ display: 'flex', gap: spacings.xs, alignItems: 'center' }}
          >
            <span>{bottle.age}세</span>
            <Asset type="icon-vertical-bar" />
            <span>{bottle.mbti}</span>
            <Asset type="icon-vertical-bar" />
            <span>{stringifyKeywords(bottle.keyword)}</span>
          </Paragraph>
        </div>
        <Image
          src={bottle.userImageUrl}
          alt="user-profile"
          priority
          width={48}
          height={48}
          style={{ borderRadius: '50%' }}
        />
      </div>
    </li>
  );
}

export function stringifyKeywords(keyword: Bottle['keyword']) {
  return keyword.slice(0, 3).reduce((acc, cur) => `${acc}${acc !== '' ? ', ' : ''}${cur}`, '');
}

function displayRemainingTime(futureDate: string) {
  const remainingTime = getTimeDifference(futureDate);

  if (remainingTime.hours > 0) {
    return `${remainingTime.hours}시간 후 사라져요`;
  }
  return `${remainingTime.minutes}분 후 사라져요`;
}
