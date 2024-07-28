import { Asset, Chip, Paragraph } from '@bottlesteam/ui';
import { Card } from '../../components/card';
import { Actions } from './_components/Actions';
import { IntroductionField, fetchProfile } from './fetchProfile';
import {
  blockStyle,
  chipWrapper,
  gapStyle,
  informationContainer,
  introductionStyle,
  layoutStyle,
  nameContainer,
  selectedProfileBlockStyle,
} from './pageStyle.css';

export default async function MyPage() {
  const {
    introduction,
    age,
    userName,
    profileSelect: {
      job,
      mbti,
      region: { city },
      smoking,
      alcohol,
      keyword,
      interest: { culture, sports, entertainment, etc },
    },
  } = await fetchProfile();

  const basicInformation = [job, mbti, city, smoking, alcohol];
  const personalities = keyword;
  const hobbies = [
    ...Object.values(culture),
    ...Object.values(sports),
    ...Object.values(entertainment),
    ...Object.values(etc),
  ];

  return (
    <div className={layoutStyle}>
      <Card>
        <Paragraph typography="st1" color="black100">
          내가 쓴 편지
        </Paragraph>
        <div className={introductionStyle}>
          {introduction.length > 0 ? (
            introduction.map(field => <IntroductionBlock key={field.question} field={field} />)
          ) : (
            <Paragraph typography="bo" color="neutral900">
              아직 자기소개를 작성하지 않았아요.
            </Paragraph>
          )}
        </div>
      </Card>
      <div aria-hidden={true} className={gapStyle} />
      <Card>
        <div className={nameContainer}>
          <Paragraph typography="st1" color="neutral900">
            {userName}
          </Paragraph>
          <Asset type="icon-vertical-bar" />
          <Paragraph typography="bo" color="neutral900">
            {age}세
          </Paragraph>
        </div>
        <div className={informationContainer}>
          <SelectedProfileBlock type="기본 정보" values={basicInformation} />
          <SelectedProfileBlock type="나의 성격은" values={personalities} />
          <SelectedProfileBlock type="내가 푹 빠진 취미는" values={hobbies} />
        </div>
      </Card>
      <Actions />
    </div>
  );
}

function IntroductionBlock({ field: { question, answer } }: { field: IntroductionField }) {
  return (
    <div className={blockStyle}>
      <Paragraph typography="st2" color="neutral600">
        {question}
      </Paragraph>
      <Paragraph typography="bo" color="neutral900">
        {answer}
      </Paragraph>
    </div>
  );
}

function SelectedProfileBlock({ type, values }: { type: string; values: string[] }) {
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
