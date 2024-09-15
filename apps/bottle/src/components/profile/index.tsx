import { Asset, Paragraph } from '@bottlesteam/ui';
import { Avatar } from '../avatar';
import { avatarAreaStyle, editButtonStyle, userInfoAreaStyle, wrapperStyle } from './profileStyle.css';

interface ProfileProps {
  image: string;
  name: string;
  age: number;
  onEditClick?: () => void;
}

export function Profile({ image, name, age, onEditClick }: ProfileProps) {
  return (
    <div className={wrapperStyle}>
      {onEditClick != null ? (
        <div className={avatarAreaStyle}>
          <Avatar src={image} size="lg" />
          <button className={editButtonStyle}>
            <Asset type="icon-pencil" />
          </button>
        </div>
      ) : (
        <Avatar src={image} size="lg" />
      )}
      <div className={userInfoAreaStyle}>
        <Paragraph typography="st1">{name}</Paragraph>
        <Asset type="icon-vertical-bar" />
        <Paragraph typography="bo">{age}세</Paragraph>
      </div>
    </div>
  );
}
