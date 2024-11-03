import { Introduction } from './introduction';
import { ProfileSelect } from './profile';

interface UserBase {
  age: number;
  introduction: Introduction;
  profileSelect: ProfileSelect;
  userName: string;
  kakaoId: string;
}

export interface CurrentUser extends UserBase {
  imageUrl: string;
}

export interface OtherUser extends UserBase {
  userImageUrl: string;
}

export type User = CurrentUser | OtherUser;

export function isCurrentUser(userInformation: User): userInformation is CurrentUser {
  return 'imageUrl' in userInformation;
}

export interface UserImages {
  userImages: string[];
}
