import { style } from '@vanilla-extract/css';
import { colors, radius, spacings } from '../../foundations';

export const wrapperStyle = style({
  width: '100%',
  backgroundColor: colors.white100,
  border: `1px solid ${colors.neutral300}`,
  padding: `${spacings.xl} ${spacings.md}`,
  gap: spacings.xl,
  borderRadius: radius.xl,
  display: 'flex',
  flexDirection: 'column',
});
