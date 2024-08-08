import { spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const titleStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacings.sm,
  marginBottom: spacings.xxl,
});
