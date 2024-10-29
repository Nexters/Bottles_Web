'use client';

import { Card } from '@/components/common/card';
import { colors, Input, typography } from '@bottlesteam/ui';
import { ReactNode, useEffect, useState } from 'react';
import React from 'react';
import { bottomAreaContainer, middleAreaContainer, numberBox, topAreaContainer } from './questionCardStyle.css';

interface QuestionCardProps {
  number: number;
  title: string;
  placeholder?: string;
  guideText: { top: string; bottom: string };
  initialValue?: string;
  bottom?: ReactNode;
  blur?: boolean;
  onChange?: (value: string) => void;
}

export interface QuestionCardRef {
  focus: () => void;
}

const MIN_LENGTH = 5;
const BLUR_OPACITY = 0.6;
const ERROR_MESSAGE = `최소 ${MIN_LENGTH}글자 이상 작성해주세요`;

export const QuestionCard = ({
  blur,
  number,
  onChange,
  title,
  placeholder,
  guideText,
  bottom,
  initialValue,
}: QuestionCardProps) => {
  const [value, setValue] = useState(initialValue ?? '');
  const [hasBeenFocused, setHasBeenFocused] = useState(false);

  const isError = value != null && value.length > 0 && value.length < MIN_LENGTH;
  const shoudBeBlurred = blur ?? (value?.length === 0 && !hasBeenFocused);

  useEffect(() => {
    if (initialValue != null) setValue(initialValue);
  }, [initialValue]);

  return (
    <Card style={{ opacity: shoudBeBlurred ? BLUR_OPACITY : 1 }}>
      <div className={topAreaContainer}>
        <div className={numberBox}>{number}</div>
        <p style={{ ...typography.st2, color: colors.neutral600 }}>{title}</p>
      </div>
      <div className={middleAreaContainer}>
        <p style={{ color: colors.neutral900, ...typography.st2 }}>{guideText.top}</p>
        <Input
          placeholder={placeholder}
          value={value}
          onFocus={() => {
            if (!hasBeenFocused) {
              setHasBeenFocused(true);
            }
          }}
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
};
