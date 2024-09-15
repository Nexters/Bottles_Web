'use client';

import { Profile } from '@/components/profile';
import { useMyInformationQuery } from '@/store/query/useMyInformation';
import { spacings } from '@bottlesteam/ui';

export function BasicInformation() {
  const {
    data: { imageUrl, age, userName },
  } = useMyInformationQuery();

  return <Profile image={imageUrl} name={userName} age={age} style={{ marginTop: spacings.xxl }} />;
}
