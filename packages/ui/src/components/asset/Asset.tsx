import { ComponentProps } from 'react';
import LeftArrowIcon from './icons/icon_arrow_left.svg';
import DownIcon from './icons/icon_down.svg';
import RightIcon from './icons/icon_right.svg';
import VerticalBarIcon from './icons/icon_vertical_bar.svg';

type Type = 'icon-arrow-left' | 'icon-down' | 'icon-right' | 'icon-vertical-bar';

export interface AssetProps extends ComponentProps<'svg'> {
  type: Type;
}

export function Asset({ type, ...rest }: AssetProps) {
  return type === 'icon-arrow-left' ? (
    <LeftArrowIcon {...rest} />
  ) : type === 'icon-down' ? (
    <DownIcon {...rest} />
  ) : type === 'icon-right' ? (
    <RightIcon {...rest} />
  ) : (
    <VerticalBarIcon />
  );
}
