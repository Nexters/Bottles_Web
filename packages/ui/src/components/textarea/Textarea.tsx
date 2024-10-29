import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useId } from 'react';
import { Paragraph } from '../paragraph';
import { Caption } from './Caption';
import {
  labelStyle,
  containerStyle,
  textareaStyle,
  counterTextWrapperStyle,
  textAreaWrapperStyle,
} from './textareaStyle.css';

export interface TextareaProps extends ComponentPropsWithoutRef<'textarea'> {
  caption?: ReactNode;
  error?: boolean;
  maxLength?: number;
}

/**
 * NOTE: needs to be controlled
 */
const TextareaImpl = forwardRef<ElementRef<'textarea'>, TextareaProps>(
  ({ caption, error = false, style, value, maxLength, ...textareaProps }, ref) => {
    const id = useId();
    const counterTextColor = value != null && String(value).length > 0 ? 'neutral600' : 'neutral400';

    return (
      <div className={containerStyle} style={style}>
        <label htmlFor={id} className={labelStyle({ error })}>
          <div className={textAreaWrapperStyle}>
            <textarea
              ref={ref}
              id={id}
              className={textareaStyle}
              value={value}
              maxLength={maxLength}
              {...textareaProps}
            />
            {maxLength != null && (
              <div className={counterTextWrapperStyle}>
                <Paragraph
                  typography="bo"
                  color={counterTextColor}
                >{`${String(value).length ?? 0} / ${maxLength}`}</Paragraph>
              </div>
            )}
          </div>
        </label>
        {caption}
      </div>
    );
  }
);

export const Textarea = Object.assign(TextareaImpl, {
  Caption,
});
