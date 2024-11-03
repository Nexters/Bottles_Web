import { spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const selectedProfileBlockStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacings.sm,
});

export const informationContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacings.xl,
});

export const chipWrapper = style({
  display: 'flex',
  rowGap: spacings.sm,
  columnGap: spacings.xs,
  flexWrap: 'wrap',
});
