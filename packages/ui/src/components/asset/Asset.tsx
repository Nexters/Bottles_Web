import { ComponentProps } from 'react';
import LeftArrowIcon from './icons/icon_arrow_left.svg';
import DownIcon from './icons/icon_down.svg';

type Type = 'icon-arrow-left' | 'icon-down';

export interface AssetProps extends ComponentProps<'svg'> {
  type: Type;
}

export function Asset({ type, ...rest }: AssetProps) {
  return type === 'icon-arrow-left' ? <LeftArrowIcon {...rest} /> : <DownIcon {...rest} />;
}
