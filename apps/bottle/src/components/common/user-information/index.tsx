import type { ReactNode } from 'react';
import { BasicInformationArea } from './BasicInformationArea';
import { IntroductionCard } from './IntroductionCard';
import { UserInformationSelectedProfile } from './SelectedProfile';
import { layoutStyle } from './userInformationStyle.css';

interface RootProps {
  children: ReactNode;
  hasCTAButton: boolean;
}

function UserInformationRoot({ children, hasCTAButton }: RootProps) {
  return <div className={layoutStyle({ hasCTAButton })}>{children}</div>;
}

export const UserInformation = Object.assign(UserInformationRoot, {
  BasicInformationArea,
  IntroductionCard,
  SelectedProfile: UserInformationSelectedProfile,
});
