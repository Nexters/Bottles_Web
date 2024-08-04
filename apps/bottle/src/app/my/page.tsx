import { ActionButtons } from './_components/ActionButtons';
import { ProfileInformation } from './_components/Profile';
import { fetchProfile } from './fetchProfile';
import { layoutStyle } from './pageStyle.css';

export default async function MyPage() {
  const profile = await fetchProfile();

  return (
    <div className={layoutStyle}>
      <ProfileInformation profile={profile} />
      <ActionButtons />
    </div>
  );
}
