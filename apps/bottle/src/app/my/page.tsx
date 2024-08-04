'use client';

import { ActionButtons } from './_components/ActionButtons';
import { ProfileInformation } from './_components/Profile';
import { layoutStyle } from './pageStyle.css';
import { useFetchProfile } from './useFetchProfile';

export default function MyPage() {
  const profile = useFetchProfile();

  return (
    <div className={layoutStyle}>
      {profile !== undefined && <ProfileInformation profile={profile} />}
      <ActionButtons />
    </div>
  );
}
