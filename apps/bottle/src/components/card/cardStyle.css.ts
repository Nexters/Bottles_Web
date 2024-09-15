import { colors, radius, spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const cardStyle = style({
  backgroundColor: colors.white100,
  borderRadius: radius.xl,
  border: `1px solid ${colors.neutral300}`,
  padding: `${spacings.xl} ${spacings.md}`,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: spacings.xl,
});
