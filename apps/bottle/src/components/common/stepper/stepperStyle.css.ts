import { colors, radius, spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  width: 'fit-content',
  height: '26px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.purple100,
  borderRadius: radius.xs,
  gap: spacings.xxs,
  marginTop: spacings.xl,
  padding: `0 ${spacings.xs}`,
  overflow: 'hidden',
});
