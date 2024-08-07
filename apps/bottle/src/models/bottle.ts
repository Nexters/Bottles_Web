import { Profile } from './profile';

export interface BottleDetail {
  age: number;
  id: number;
  introduction: [
    {
      answer: string;
      question: string;
    },
  ];
  likeMessage: string;
  profileSelect: Profile;
  userName: string;
}
