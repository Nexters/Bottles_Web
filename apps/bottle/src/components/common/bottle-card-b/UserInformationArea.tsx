import { RecommendationBottlePreview, SentBottlePreview } from '@/models/bottle';
import { Asset, Paragraph, spacings } from '@bottlesteam/ui';
import { Avatar } from '../avatar';
import {
  avatarAreaStyle,
  avatarEmojiWrapper,
  bubbleContainer,
  emojiContainer,
  userInformationAreaStyle,
  userInformationItemsStyle,
  userPreviewStyle,
} from './bottleCardstyle.css';

type Props =
  | Pick<RecommendationBottlePreview, 'userName' | 'age' | 'mbti' | 'userImageUrl' | 'lastActivatedAt'>
  | Pick<SentBottlePreview, 'userName' | 'age' | 'mbti' | 'userImageUrl' | 'lastActivatedAt' | 'likeEmoji'>;

export function UserInformationArea({ userName, userImageUrl, age, mbti, lastActivatedAt, ...rest }: Props) {
  return (
    <div className={userInformationAreaStyle}>
      <div className={userPreviewStyle}>
        <Paragraph typography="t2" color="neutral900">
          {userName}
        </Paragraph>
        <div className={userInformationItemsStyle}>
          <Paragraph typography="ca" color="neutral900">
            {age}
          </Paragraph>
          <Paragraph typography="ca" color="neutral100">
            |
          </Paragraph>
          <Paragraph typography="ca" color="neutral900">
            {mbti}
          </Paragraph>
          <Paragraph typography="ca" color="neutral100">
            |
          </Paragraph>
          <div style={{ display: 'flex', alignItems: 'center', gap: spacings.xxs }}>
            <Asset type="icon-clock" />
            <Paragraph typography="ca" color="neutral900">
              {lastActivatedAt} 접속
            </Paragraph>
          </div>
        </div>
      </div>
      <div className={avatarEmojiWrapper}>
        <div className={avatarAreaStyle}>
          <Avatar size="sm" src={userImageUrl} />
          <div className={bubbleContainer}>
            <div className={emojiContainer}>
              {Object.hasOwn(rest, 'likeEmoji') && (
                <Paragraph typography="t2">{(rest as any).likeEmoji as string}</Paragraph>
              )}
            </div>
            <Asset type="vector" />
          </div>
        </div>
      </div>
    </div>
  );
}
