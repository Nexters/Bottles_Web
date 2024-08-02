import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useId } from 'react';
import { Caption } from './Caption';
import { labelStyle, inputStyle, containerStyle } from './textFieldStyle.css';

export interface TextFieldProps extends ComponentPropsWithoutRef<'input'> {
  rightButton?: ReactNode;
  caption?: ReactNode;
  error?: boolean;
}

const TextFieldImpl = forwardRef<ElementRef<'input'>, TextFieldProps>(
  ({ rightButton, caption, error = false, ...inputProps }, ref) => {
    const id = useId();

    const hasRightButton = rightButton !== undefined;
    const { disabled } = inputProps;

    return (
      <div className={containerStyle}>
        <label htmlFor={id} className={labelStyle({ disabled, error })}>
          <input ref={ref} id={id} className={inputStyle({ hasRightButton })} {...inputProps} />
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
