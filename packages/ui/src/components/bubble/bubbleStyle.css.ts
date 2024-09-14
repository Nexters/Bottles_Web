import { style } from '@vanilla-extract/css';
import { colors, spacings, typography } from '../../foundations';

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
  height: '48px',
  padding: `0 ${spacings.lg}`,
  display: 'flex',
  alignItems: 'center',
  backgroundColor: colors.white100,
  borderRadius: '20px',
  boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.04);',
  ...typography.st2,
});

export const vectorContainerStyle = style({
  width: 'auto',
  height: '6px',
});
