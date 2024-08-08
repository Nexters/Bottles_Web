import { Introduction } from './introduction';
import { Profile } from './profile';

interface UserBase {
  age: number;
  introduction: Introduction;
  profileSelect: Profile;
  userName: string;
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
