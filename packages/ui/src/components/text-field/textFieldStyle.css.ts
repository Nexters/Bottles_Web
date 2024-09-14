import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors, radius, spacings, typography } from '../../foundations';

const BUTTON_WIDTH = 76;
const DEFAULT_PADDING = 16;
const ADDITIONAL_PADDING = 12;

export const containerStyle = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: spacings.xxs,
});

export const inputStyle = recipe({
  base: {
    height: 'auto',
    border: 'none',
    outline: 'none',
    backgroundColor: 'inherit',
    color: colors.neutral900,
    ...typography.bo,
    '::placeholder': {
      color: colors.neutral400,
    },
    ':disabled': {
      color: colors.neutral400,
    },
  },
  variants: {
    hasRightButton: {
      true: {
        width: `calc(100% - ${DEFAULT_PADDING + BUTTON_WIDTH + ADDITIONAL_PADDING}px)`,
      },
      false: {
        width: '100%',
      },
    },
  },
});

export const labelStyle = recipe({
  base: {
    width: '100%',
    height: '56px',
    padding: `0 ${spacings.md}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: radius.sm,
  },
  variants: {
    disabled: {
      true: {
        border: `1px solid ${colors.neutral300}`,
      },
      false: {
        border: `1px solid ${colors.neutral300}`,
      },
    },
    error: {
      true: {
        border: `1px solid ${colors.red}`,
      },
      false: {
        border: `1px solid ${colors.neutral300}`,
      },
    },
    focused: {
      true: {
        backgroundColor: colors.neutral100,
      },
      false: {
        backgroundColor: colors.white100,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        error: true,
        disabled: true,
      },
      style: {
        // NOTE: error & disabled이면, disabled의 보더 색상을 따른다.
        border: `1px solid ${colors.neutral300}`,
      },
    },
  ],
});
