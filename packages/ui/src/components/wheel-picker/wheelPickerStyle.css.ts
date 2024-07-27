import { style } from '@vanilla-extract/css';
import { colors, radius } from '../../foundations';

export const listStyle = style({
  position: 'relative',
  margin: '0',
  padding: '0',
  display: 'inline-block',
  listStyle: 'none',
  overflowY: 'scroll',
  willChange: 'transform',
  overflowX: 'hidden',
  textAlign: 'center',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const itemStyle = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  selectors: {
    '&:focus': {
      outline: 'none',
    },
  },
});

export const textStyle = style({
  margin: 0,
  textAlign: 'center',
  wordWrap: 'break-word',
  zIndex: 1000,
});

export const selectedContainerStyle = style({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  pointerEvents: 'none',
});

export const selectedStyle = style({
  width: '100%',
  height: '56px',
  backgroundColor: colors.white100,
  pointerEvents: 'none',
  border: `1px solid ${colors.neutral300}`,
  borderRadius: radius.sm,
});
