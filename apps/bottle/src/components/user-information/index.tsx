import type { CSSProperties, ReactNode } from 'react';
import { BasicInformationArea } from './BasicInformationArea';
import { IntroductionCard } from './IntroductionCard';
import { SelectedProfile } from './SelectedProfile';
import { layoutStyle } from './userInformationStyle.css';

function UserInformationRoot({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <div className={layoutStyle} style={style}>
      {children}
    </div>
  );
}

export const UserInformation = Object.assign(UserInformationRoot, {
  BasicInformationArea,
  IntroductionCard,
  SelectedProfile,
});
