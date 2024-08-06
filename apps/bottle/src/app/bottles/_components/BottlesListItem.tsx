import { Bottle } from '@/features/query/useBottlesQuery';
import { Paragraph, spacings, Asset } from '@bottlesteam/ui';
import {
  itemStyle,
  timeLabelStyle,
  userInfoContainerStyle,
  userInfoStyle,
  imageContainerStyle,
} from './bottlesListStyle.css';

interface Props {
  bottle: Bottle;
  onClick: () => void;
}

export function BottlesListItem({ bottle, onClick }: Props) {
  return (
    <li key={bottle.id} className={itemStyle} onClick={onClick}>
      <div className={timeLabelStyle}>
        <Paragraph typography="bo" color="purple500">
          1시간 후 사라져요
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
        {/**
         * TODO: 실제 이미지 넣기
         */}
        <div className={imageContainerStyle} />
      </div>
    </li>
  );
}

export function stringifyKeywords(keyword: Bottle['keyword']) {
  return keyword.slice(0, 3).reduce((acc, cur) => `${acc}${acc !== '' ? ', ' : ''}${cur}`, '');
}
