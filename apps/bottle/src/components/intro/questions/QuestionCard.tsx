import { Card } from '@/components/common/card';
import { colors, Input, typography } from '@bottlesteam/ui';
import { forwardRef, ReactNode, useImperativeHandle, useRef, useState } from 'react';
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

export const QuestionCard = forwardRef<QuestionCardRef, QuestionCardProps>(
  ({ blur, number, onChange, title, placeholder, guideText, bottom, initialValue }: QuestionCardProps, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [value, setValue] = useState(initialValue);
    const [hasBeenFocused, setHasBeenFocused] = useState(false);

    const isError = value != null && value.length > 0 && value.length < MIN_LENGTH;
    const shoudBeBlurred = blur ?? (value?.length === 0 && !hasBeenFocused);

    useImperativeHandle(
      ref,
      () => ({
        focus: () => {
          inputRef.current?.focus();
        },
      }),
      []
    );

    return (
      <Card style={{ opacity: shoudBeBlurred ? BLUR_OPACITY : 1 }}>
        <div className={topAreaContainer}>
          <div className={numberBox}>{number}</div>
          <p style={{ ...typography.st2, color: colors.neutral600 }}>{title}</p>
        </div>
        <div className={middleAreaContainer}>
          <p style={{ color: colors.neutral900, ...typography.st2 }}>{guideText.top}</p>
          <Input
            ref={inputRef}
            placeholder={placeholder}
            value={value ?? initialValue}
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
  }
);

QuestionCard.displayName = 'QuestionCard';
