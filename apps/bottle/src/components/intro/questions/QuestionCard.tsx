import { Card } from '@/components/common/card';
import { colors, Input, typography } from '@bottlesteam/ui';
import { ReactNode, useState } from 'react';
import { bottomAreaContainer, middleAreaContainer, numberBox, topAreaContainer } from './questionCardStyle.css';

interface Props {
  number: number;
  title: string;
  placeholder?: string;
  defaultValue?: string;
  guideText: { top: string; bottom: string };
  bottom?: ReactNode;
  blur?: boolean;
  onChange?: (value: string) => void;
}

const MIN_LENGTH = 5;
const ERROR_MESSAGE = `최소 ${MIN_LENGTH}글자 이상 작성해주세요`;

export function QuestionCard({ blur = false, number, onChange, title, placeholder, guideText, bottom }: Props) {
  const [value, setValue] = useState('');

  const isError = value.length > 0 && value.length < MIN_LENGTH;

  return (
    <Card style={{ opacity: blur ? 0.6 : 1 }}>
      <div className={topAreaContainer}>
        <div className={numberBox}>{number}</div>
        <p style={{ ...typography.st2, color: colors.neutral600 }}>{title}</p>
      </div>
      <div className={middleAreaContainer}>
        <p style={{ color: colors.neutral900, ...typography.st2 }}>{guideText.top}</p>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={e => {
            setValue(e.currentTarget.value);
            onChange?.(e.currentTarget.value);
          }}
          error={isError}
          caption={isError && <Input.Caption>{ERROR_MESSAGE}</Input.Caption>}
        />
        <p style={{ color: colors.neutral900, ...typography.st2 }}>{guideText.bottom}</p>
      </div>
      {bottom != null && <div className={bottomAreaContainer}>{bottom}</div>}
    </Card>
  );
}
