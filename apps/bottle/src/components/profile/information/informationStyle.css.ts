import { spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  marginTop: spacings.xxl,
  display: 'flex',
  flexDirection: 'column',
  gap: spacings.xl,
});

export const fieldStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacings.sm,
});

export const birthDateWrapper = style({
  display: 'flex',
  gap: spacings.xxs,
});

export const buttonsWrapper = style({
  display: 'flex',
  gap: spacings.sm,
});
