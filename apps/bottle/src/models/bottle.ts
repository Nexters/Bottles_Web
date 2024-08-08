import { Profile } from './profile';
import { OtherUser } from './user';

export interface Bottle extends OtherUser {
  id: number;
  likeMessage: string;
}

export interface PreviewBottle
  extends Pick<Bottle, 'age' | 'id' | 'userImageUrl' | 'userName'>,
    Pick<Profile, 'keyword' | 'mbti'> {
  expiredAt: string;
}
