import { ComponentProps } from 'react';
import LeftArrowIcon from './icons/icon_arrow_left.svg';
import CheckIcon from './icons/icon_check.svg';
import CheckIconColored from './icons/icon_check_colored.svg';
import CheckIconWhite from './icons/icon_check_white.svg';
import ClockIcon from './icons/icon_clock.svg';
import IconClose from './icons/icon_close.svg';
import IconCloseWhite from './icons/icon_close_white.svg';
import DeleteIcon from './icons/icon_delete.svg';
import DownIcon from './icons/icon_down.svg';
import PencilIcon from './icons/icon_pencil.svg';
import PlusIcon from './icons/icon_plus.svg';
import RightIcon from './icons/icon_right.svg';
import VerticalBarIcon from './icons/icon_vertical_bar.svg';
import Vector from './icons/vector.svg';

type Type =
  | 'icon-arrow-left'
  | 'icon-down'
  | 'icon-right'
  | 'icon-vertical-bar'
  | 'vector'
  | 'icon-check'
  | 'icon-check-colored'
  | 'icon-check-white'
  | 'icon-close'
  | 'icon-close-white'
  | 'icon-delete'
  | 'icon-pencil'
  | 'icon-plus'
  | 'icon-clock';

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
  ) : type === 'vector' ? (
    <Vector />
  ) : type === 'icon-check' ? (
    <CheckIcon />
  ) : type === 'icon-check-colored' ? (
    <CheckIconColored />
  ) : type === 'icon-check-white' ? (
    <CheckIconWhite />
  ) : type === 'icon-close' ? (
    <IconClose />
  ) : type === 'icon-close-white' ? (
    <IconCloseWhite />
  ) : type === 'icon-delete' ? (
    <DeleteIcon />
  ) : type === 'icon-pencil' ? (
    <PencilIcon />
  ) : type === 'icon-clock' ? (
    <ClockIcon />
  ) : type === 'icon-plus' ? (
    <PlusIcon />
  ) : (
    <VerticalBarIcon />
  );
}
