import type { ReactNode } from 'react';
import { BasicInformationArea } from './BasicInformationArea';
import { IntroductionCard } from './IntroductionCard';
import { SelectedProfile } from './SelectedProfile';
import { layoutStyle } from './userInformationStyle.css';

function UserInformationRoot({ children }: { children: ReactNode }) {
  return <div className={layoutStyle}>{children}</div>;
}

export const UserInformation = Object.assign(UserInformationRoot, {
  BasicInformationArea,
  IntroductionCard,
  SelectedProfile,
});
