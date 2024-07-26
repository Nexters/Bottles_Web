import { forwardRef, FocusEventHandler, MouseEventHandler, CSSProperties, ElementRef } from 'react';
import { OPTION_ID } from './constants/id';
import { itemStyle, textStyle } from './wheelPickerStyle.css';

export interface WheelPickerItemProps {
  id: string;
  value: string | number;
  activeID: string;
  height: number;
  color: CSSProperties['color'];
  activeColor: CSSProperties['color'];
  fontSize: number;
  onClick?: MouseEventHandler;
  onFocus?: FocusEventHandler;
}

export const WheelPickerItem = forwardRef<ElementRef<'li'>, WheelPickerItemProps>(
  ({ id, value, activeID, height, color, activeColor, fontSize, onClick, onFocus }, ref) => {
    return (
      <li
        role="option"
        aria-selected={id === activeID}
        aria-label={value.toString()}
        ref={ref}
        id={`${OPTION_ID}${id}`}
        data-itemid={id}
        data-itemvalue={value}
        style={{ minHeight: height }}
        onClick={onClick}
        onFocus={onFocus}
        tabIndex={0}
        className={itemStyle}
      >
        <p
          className={textStyle}
          style={{
            color: id === activeID ? activeColor : color,
            fontSize,
          }}
        >
          {value}
        </p>
      </li>
    );
  }
);
