import { ProfileLayout } from '@/components/profile/layout';
import { ReactNode } from 'react';
import { HeaderArea } from '../HeaderArea';

interface Props {
  children: ReactNode;
}

export default function ItemEditLayout({ children }: Props) {
  return (
    <ProfileLayout>
      <HeaderArea />
      {children}
    </ProfileLayout>
  );
}
