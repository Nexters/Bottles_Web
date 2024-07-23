import { colors, radius, spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  width: '44.44px',
  height: '26px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.purple100,
  borderRadius: radius.xs,
  gap: spacings.xxs,
});
