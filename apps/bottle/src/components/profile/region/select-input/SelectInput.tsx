import { Asset, Paragraph } from '@bottlesteam/ui';
import { ComponentProps } from 'react';
import { selectInputStyle, inputStyle } from './selectInputStyle.css';

interface SelectProps extends ComponentProps<'div'> {
  placeholder?: string;
  value?: string;
}

export const SelectInput = ({ style, value, placeholder, onClick, ...rest }: SelectProps) => {
  return (
    <div onClick={onClick} className={selectInputStyle} style={style}>
      <div className={inputStyle} {...rest}>
        {value && value.length > 0 ? (
          <Paragraph typography="bo" color="neutral900">
            {value}
          </Paragraph>
        ) : (
          <Paragraph typography="bo" color="neutral400">
            {placeholder}
          </Paragraph>
        )}
      </div>
      <Asset type="icon-down" />
    </div>
  );
};
