import { UserInformation } from '@/components/user-information';
import { User } from '@/models/user';

interface Props {
  userInformation: User;
}

export function MyInformation({ userInformation }: Props) {
  return (
    <UserInformation>
      <UserInformation.IntroductionCard title="내가 쓴 편지" introduction={userInformation.introduction} />
      <UserInformation.SelectedProfile profile={userInformation.profileSelect} />
    </UserInformation>
  );
}
