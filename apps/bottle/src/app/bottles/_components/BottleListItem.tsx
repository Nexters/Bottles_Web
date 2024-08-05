import { Asset, Paragraph, spacings } from '@bottlesteam/ui';
import {
  imageContainerStyle,
  itemStyle,
  timeLabelStyle,
  userInfoContainerStyle,
  userInfoStyle,
} from './bottleListItemStyle.css';

export function BottleListItem() {
  return (
    <li className={itemStyle}>
      <div className={timeLabelStyle}>
        <Paragraph typography="bo" color="purple500">
          1시간 후 사라져요
        </Paragraph>
      </div>
      <div className={userInfoContainerStyle}>
        <div className={userInfoStyle}>
          <Paragraph typography="t2" color="neutral900" style={{ width: 'fit-content' }}>
            황태환
          </Paragraph>
          <Paragraph
            typography="ca"
            color="neutral600"
            style={{ display: 'flex', gap: spacings.xs, alignItems: 'center' }}
          >
            <span>27세</span>
            <Asset type="icon-vertical-bar" />
            <span>ESFJ</span>
            <Asset type="icon-vertical-bar" />
            <span>적극적인, 예의바른, 활동적인</span>
          </Paragraph>
        </div>
        <div className={imageContainerStyle} />
      </div>
    </li>
  );
}
