import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors, radius, spacings, typography } from '../../foundations';

export const containerStyle = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: spacings.xxs,
});

export const labelStyle = recipe({
  base: {
    width: '100%',
    height: '300px',
    padding: spacings.md,
    borderRadius: radius.xl,
    backgroundColor: colors.white100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacings.md,
  },
  variants: {
    error: {
      true: {
        border: `1px solid ${colors.red}`,
      },
      false: {
        border: `1px solid ${colors.neutral300}`,
      },
    },
  },
});

export const textAreaWrapperStyle = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: colors.neutral100,
  padding: spacings.md,
  borderRadius: radius.sm,
});

export const textareaStyle = style({
  font: 'inherit',
  resize: 'none',
  height: '203px',
  border: 'none',
  outline: 'none',
  backgroundColor: 'inherit',
  color: colors.neutral900,
  ...typography.bo,
  '::placeholder': {
    color: colors.neutral400,
  },
});

export const counterTextWrapperStyle = style({
  width: '100%',
  textAlign: 'end',
});
