import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useId, useState } from 'react';
import { Caption } from './Caption';
import { labelStyle, inputStyle, containerStyle } from './textFieldStyle.css';

export interface TextFieldProps extends ComponentPropsWithoutRef<'input'> {
  rightButton?: ReactNode;
  caption?: ReactNode;
  error?: boolean;
}

const TextFieldImpl = forwardRef<ElementRef<'input'>, TextFieldProps>(
  ({ rightButton, caption, error = false, style, ...inputProps }, ref) => {
    const id = useId();
    const [focused, setFocused] = useState(false);

    const hasRightButton = rightButton !== undefined;
    const { disabled } = inputProps;

    return (
      <div className={containerStyle} style={style}>
        <label htmlFor={id} className={labelStyle({ disabled, error, focused })}>
          <input
            ref={ref}
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
            id={id}
            className={inputStyle({ hasRightButton })}
            {...inputProps}
          />
          {rightButton}
        </label>
        {caption}
      </div>
    );
  }
);

export const TextField = Object.assign(TextFieldImpl, {
  Caption,
});
