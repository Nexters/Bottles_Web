'use client';

import { useMemo, useImperativeHandle, forwardRef, useState, useEffect, useCallback, CSSProperties } from 'react';
import { WheelPickerItem } from './WheelPickerItem';
import { OPTION_ID } from './constants/id';
import { useHandleKeyboard } from './hooks/useHandleKeyboard';
import { useObserver } from './hooks/useObserver';
import { listStyle, selectedContainerStyle, selectedStyle } from './wheelPickerStyle.css';

const calculateSpaceHeight = (height: number, itemHeight: number): number => {
  const limit = height / itemHeight / 2 - 0.5;
  return itemHeight * limit;
};

export interface PickerData {
  id: string;
  value: string | number;
}

export interface WheelPickerProps {
  data: PickerData[];
  selectedID: string;
  onChange: (data: PickerData) => void;
  height: number;
  itemHeight: number;
  idName?: string;
  titleID?: string;
  titleText?: string;
  required?: boolean;
  width?: CSSProperties['width'];
  color?: CSSProperties['color'];
  activeColor?: CSSProperties['color'];
  fontSize: number;
  backgroundColor?: CSSProperties['backgroundColor'];
  shadowColor?: CSSProperties['color'];
  focusColor?: CSSProperties['color'];
}

export const WheelPicker = forwardRef<WheelPickerRef, WheelPickerProps>(
  (
    {
      data,
      selectedID,
      onChange,
      height,
      itemHeight,
      idName,
      titleID,
      titleText,
      width,
      color,
      activeColor,
      fontSize,
      required,
    },
    ref
  ) => {
    const [_itemHeight, setItemHeight] = useState(itemHeight);
    const { onKeyUp, onKeyPress } = useHandleKeyboard(_itemHeight);
    const { root, refs, activeID, onFocus } = useObserver(data, selectedID, _itemHeight, onChange);

    const spaceHeight = useMemo(() => calculateSpaceHeight(height, _itemHeight), [_itemHeight, height]);

    const ariaActivedescendant = useMemo(() => {
      return `${OPTION_ID}${activeID}`;
    }, [activeID]);

    const handleOnClick = useCallback(
      (e: React.MouseEvent<HTMLLIElement>) => {
        if (root.current) {
          root.current.scrollTo(0, e.currentTarget.offsetTop - spaceHeight);
        }
      },
      [root, spaceHeight]
    );

    useImperativeHandle(
      ref,
      () => ({
        focus: () => {
          root.current && root.current.focus();
        },
        blur: () => {
          root.current && root.current.blur();
        },
      }),
      [root]
    );

    useEffect(() => {
      const adjustItemHeight = () => {
        let maxHeight = itemHeight;
        Object.keys(refs).map(id => {
          const elm = refs[id]?.current;
          if (!elm) {
            return;
          }

          const h = elm.clientHeight;
          if (h > maxHeight) {
            maxHeight = h;
          }
        });
        return maxHeight;
      };
      setItemHeight(adjustItemHeight());
    }, [itemHeight, refs]);

    return (
      <div style={{ width, height, position: 'relative' }}>
        <div className={selectedContainerStyle}>
          <div className={selectedStyle} />
        </div>
        <ul
          id={idName}
          tabIndex={0}
          role="listbox"
          aria-labelledby={titleID}
          aria-label={titleText}
          aria-required={required}
          aria-activedescendant={ariaActivedescendant}
          ref={root}
          data-testid="picker-list"
          style={{
            width,
            height,
            color,
          }}
          onKeyUp={onKeyUp}
          onKeyPress={onKeyPress}
          onKeyDown={onKeyPress}
          className={listStyle}
        >
          <div style={{ height: spaceHeight }} />
          {data.map(item => (
            <WheelPickerItem
              key={item.id}
              color={color}
              activeColor={activeColor}
              fontSize={fontSize}
              {...item}
              height={_itemHeight}
              activeID={activeID}
              onClick={handleOnClick}
              onFocus={onFocus}
              ref={refs[item.id]}
            />
          ))}

          <div style={{ height: spaceHeight }} />
        </ul>
      </div>
    );
  }
);

export interface WheelPickerRef {
  focus: () => void;
  blur: () => void;
}
