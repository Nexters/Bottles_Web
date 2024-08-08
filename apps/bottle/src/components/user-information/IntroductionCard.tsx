import { Introduction } from '@/models/introduction';
import { User } from '@/models/user';
import { Paragraph, spacings } from '@bottlesteam/ui';
import { Card } from '../card';
import { blockStyle, introductionStyle } from './userInformationStyle.css';

interface Props {
  introduction: User['introduction'];
  title: string;
}

export function IntroductionCard(props: Props) {
  return (
    <Card style={{ marginBottom: spacings.sm }}>
      <Paragraph typography="st1" color="black100">
        {props.title}
      </Paragraph>
      <div className={introductionStyle}>
        {props.introduction.length > 0 ? (
          props.introduction.map(field => <IntroductionBlock key={field.question} field={field} />)
        ) : (
          <Paragraph typography="bo" color="neutral900">
            아직 자기소개를 작성하지 않았아요.
          </Paragraph>
        )}
      </div>
    </Card>
  );
}

function IntroductionBlock({ field: { question, answer } }: { field: Introduction[number] }) {
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
