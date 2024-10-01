import { ReactNode } from 'react';
import { IntroductionBox } from './IntroductionBox';
import { TimeTag } from './TimeTag';
import { UserInformationArea } from './UserInformationArea';
import { cardStyle } from './bottleCardstyle.css';

function BottleCardImpl({ children }: { children: ReactNode }) {
  return <div className={cardStyle}>{children}</div>;
}

export const BottleCard = Object.assign(BottleCardImpl, {
  TimeTag,
  Introduction: IntroductionBox,
  UserInformation: UserInformationArea,
});
