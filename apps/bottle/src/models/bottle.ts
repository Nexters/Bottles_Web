import { Profile } from './profile';
import { OtherUser } from './user';

/**
 * @deprecated
 */
export interface Bottle extends OtherUser {
  id: number;
  likeMessage: string;
}

/**
 * @deprecated
 */
export interface PreviewBottle
  extends Pick<Bottle, 'age' | 'id' | 'userImageUrl' | 'userName'>,
    Pick<Profile, 'keyword' | 'mbti'> {
  expiredAt: string;
}

export interface BaseBottlePreview
  extends Pick<OtherUser, 'age' | 'userImageUrl' | 'userName' | 'introduction'>,
    Pick<OtherUser['profileSelect'], 'keyword' | 'mbti'> {
  userId: number;
  expiredAt: string; // Date
  id: number;
  lastActivatedAt: string;
}

export interface RecommendationBottlePreview extends BaseBottlePreview {
  likeEmoji: string;
}

export interface SentBottlePreview extends BaseBottlePreview {}
