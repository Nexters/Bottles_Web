import { spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const jobStyle = style({
  marginTop: spacings.xxl,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: spacings.sm,
});
