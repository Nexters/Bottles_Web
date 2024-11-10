import { ProfileSelect } from '@/models/profile';
import { Chip, Paragraph, spacings } from '@bottlesteam/ui';
import type { ReactNode } from 'react';
import { Card } from '../card';
import { chipWrapper, informationContainer, selectedProfileBlockStyle } from './selectedProfileStyle.css';

interface Props {
  profile: ProfileSelect;
  items: ({
    basicInformation,
    personalities,
    hobbies,
  }: {
    basicInformation: string[];
    personalities: string[];
    hobbies: string[];
  }) => ReactNode;
}

export function SelectedProfileImpl({
  profile: {
    job,
    mbti,
    region: { city },
    smoking,
    alcohol,
    keyword,
    height,
    interest: { culture, sports, entertainment, etc },
  },
  items,
}: Props) {
  const basicInformation =
    smoking != null && alcohol != null
      ? [job, mbti, city, `${height}cm`, smoking, alcohol]
      : smoking != null
        ? [job, mbti, city, `${height}cm`, smoking]
        : [job, mbti, city, `${height}cm`];
  const personalities = keyword;
  const hobbies = [
    ...Object.values(culture),
    ...Object.values(sports),
    ...Object.values(entertainment),
    ...Object.values(etc),
  ];

  return (
    <Card style={{ marginBottom: spacings.xl }}>
      <div className={informationContainer}>{items({ basicInformation, personalities, hobbies })}</div>
    </Card>
  );
}

export function SelectedProfileBlock({ type, values }: { type: string; values: (string | number)[] }) {
  return (
    <div className={selectedProfileBlockStyle}>
      <Paragraph typography="st2" color="neutral600">
        {type}
      </Paragraph>
      <div className={chipWrapper}>
        {values.map(value => (
          <Chip key={value}>{value}</Chip>
        ))}
      </div>
    </div>
  );
}

export const SelectedProfile = Object.assign(SelectedProfileImpl, {
  Item: SelectedProfileBlock,
});
