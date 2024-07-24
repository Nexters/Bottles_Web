import { spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const bodyStyle = style({
  marginTop: spacings.xxl,
  display: 'flex',
  flexDirection: 'column',
  gap: spacings.xl,
});

export const buttonsContainerStyle = style({
  display: 'flex',
  width: '100%',
  gap: spacings.sm,
});
