import { style } from '@vanilla-extract/css';
import { spacings } from '../../../systems';

export const containerStyle = style({
  width: '100vw',
  padding: `0 ${spacings.md}`,
  display: 'flex',
  justifyContent: 'center',
  gap: spacings.sm,
});

export const leftStyle = style({
  width: 'calc(50% - 6px)',
  height: '56px',
});
export const rightStyle = style({
  width: 'calc(50% - 6px)',
  height: '56px',
});
