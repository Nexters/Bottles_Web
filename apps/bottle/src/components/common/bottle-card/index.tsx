import { ComponentProps } from 'react';
import { IntroductionBox } from './IntroductionBox';
import { TimeTag } from './TimeTag';
import { UserInformationArea } from './UserInformationArea';
import { cardStyle } from './bottleCardstyle.css';

function BottleCardImpl({ children, ...rest }: ComponentProps<'div'>) {
  return (
    <div className={cardStyle} {...rest}>
      {children}
    </div>
  );
}

export const BottleCard = Object.assign(BottleCardImpl, {
  TimeTag,
  Introduction: IntroductionBox,
  UserInformation: UserInformationArea,
});
