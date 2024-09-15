'use client';

import { Profile } from '@/components/profile';
import { useMyInformationQuery } from '@/store/query/useMyInformation';

export function ProfileArea() {
  const {
    data: { imageUrl, age, userName },
  } = useMyInformationQuery();

  return <Profile image={imageUrl} name={userName} age={age} />;
}
