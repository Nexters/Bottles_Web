import { Profile } from '@/models/profile';
import { Chip, Paragraph, spacings } from '@bottlesteam/ui';
import { Card } from '../card';
import { chipWrapper, informationContainer, selectedProfileBlockStyle } from './userInformationStyle.css';

interface Props {
  profile: Profile;
}

export function SelectedProfile({
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
}: Props) {
  const basicInformation = [job, mbti, city, smoking, alcohol, height];
  const personalities = keyword;
  const hobbies = [
    ...Object.values(culture),
    ...Object.values(sports),
    ...Object.values(entertainment),
    ...Object.values(etc),
  ];

  return (
    <Card style={{ marginBottom: spacings.xl }}>
      <div className={informationContainer}>
        <SelectedProfileBlock type="기본 정보" values={basicInformation} />
        <SelectedProfileBlock type="나의 성격은" values={personalities} />
        <SelectedProfileBlock type="내가 푹 빠진 취미는" values={hobbies} />
      </div>
    </Card>
  );
}

function SelectedProfileBlock({ type, values }: { type: string; values: (string | number)[] }) {
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
