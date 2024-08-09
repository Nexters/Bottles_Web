import { style } from '@vanilla-extract/css';
import { colors, spacings } from '../../foundations';

export const wrapperStyle = style({
  width: 'auto',
  height: '48px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 0,
});

export const messageContainerstyle = style({
  width: 'auto',
  height: '42px',
  padding: `0 ${spacings.lg}`,
  display: 'flex',
  alignItems: 'center',
  backgroundColor: colors.white100,
  borderRadius: '20px',
});

export const vectorContainerStyle = style({
  width: 'auto',
  height: '6px',
});
