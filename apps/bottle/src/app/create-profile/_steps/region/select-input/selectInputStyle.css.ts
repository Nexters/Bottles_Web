import { colors, radius, spacings, typography } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const selectInputStyle = style({
  width: '100%',
  height: '56px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: spacings.md,
  backgroundColor: colors.white100,
  borderRadius: radius.sm,
  border: `1px solid ${colors.neutral300}`,
});

export const inputStyle = style({
  outline: 'none',
  border: 'none',
  color: colors.neutral900,
  ...typography.bo,
});
