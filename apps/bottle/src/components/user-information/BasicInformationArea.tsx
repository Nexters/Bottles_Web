import { CurrentUser, OtherUser } from '@/models/user';
import { Asset, Paragraph } from '@bottlesteam/ui';
import { Avatar } from '../avatar';
import { basicInformationAreaStyle, nameAndAgeContainerStyle } from './userInformationStyle.css';

type Props = Pick<CurrentUser, 'imageUrl' | 'age' | 'userName'> | Pick<OtherUser, 'userImageUrl' | 'age' | 'userName'>;

function isCurrentUser(props: Props): props is Pick<CurrentUser, 'imageUrl' | 'age' | 'userName'> {
  return 'imageUrl' in props;
}

export function BasicInformationArea(props: Props) {
  return (
    <section className={basicInformationAreaStyle}>
      <Avatar src={isCurrentUser(props) ? props.imageUrl : props.userImageUrl} size="lg" />
      <div className={nameAndAgeContainerStyle}>
        <Paragraph typography="st1" color="neutral900">
          {props.userName}
        </Paragraph>
        <Asset type="icon-vertical-bar" />
        <Paragraph typography="bo" color="neutral900">
          {props.age}세
        </Paragraph>
      </div>
    </section>
  );
}
