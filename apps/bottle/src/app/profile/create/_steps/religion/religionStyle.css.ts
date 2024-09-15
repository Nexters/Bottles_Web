import { spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const religionStyle = style({
  marginTop: spacings.xxl,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: spacings.sm,
});
