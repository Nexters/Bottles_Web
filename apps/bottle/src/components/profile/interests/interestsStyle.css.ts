import { spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const interestsStyle = style({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  rowGap: spacings.sm,
  columnGap: spacings.xs,
  marginTop: spacings.sm,
});
