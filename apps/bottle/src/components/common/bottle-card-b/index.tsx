import { SentBottlePreview } from '@/models/bottle';
import { Paragraph } from '@bottlesteam/ui';
import { ComponentProps } from 'react';
import { TimeTag } from './TimeTag';
import { UserInformationArea } from './UserInformationArea';
import { cardStyle, keywordChip, lowerArea, upperArea } from './bottleCardstyle.css';

interface BottleCardBProps extends Pick<ComponentProps<'div'>, 'onClick'> {
  bottle: SentBottlePreview;
}

export function BottleCardB({ bottle, onClick }: BottleCardBProps) {
  return (
    <div className={cardStyle} onClick={onClick}>
      <div className={upperArea}>
        <TimeTag>{bottle.expiredAt}</TimeTag>
        <UserInformationArea
          userImageUrl={bottle.userImageUrl}
          userName={bottle.userName}
          age={bottle.age}
          mbti={bottle.mbti}
          lastActivatedAt={bottle.lastActivatedAt}
          likeEmoji={bottle.likeEmoji}
        />
      </div>
      <div className={lowerArea}>
        {bottle.keyword.slice(0, 3).map(keyword => (
          <div className={keywordChip} key={keyword}>
            <Paragraph typography="ca" color="neutral900">
              {keyword}
            </Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
}
