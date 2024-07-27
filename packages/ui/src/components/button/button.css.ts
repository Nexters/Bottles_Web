import { recipe } from '@vanilla-extract/recipes';
import { colors, radius, spacings } from '../../foundations';
import { typography } from '../../foundations';

export const buttonStyle = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white100,
    cursor: 'pointer',
  },
  variants: {
    variant: {
      outlined: {
        ':disabled': {
          backgroundColor: colors.white100,
          color: colors.neutral400,
          border: `1px solid ${colors.neutral300}`,
        },
      },
      solid: {
        ':disabled': {
          backgroundColor: colors.neutral400,
        },
      },
    },
    selected: {
      true: {
        backgroundColor: colors.purple100,
        color: colors.purple500,
        border: `1px solid ${colors.purple500}`,
      },
    },
    size: {
      sm: {},
      md: {},
      lg: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        variant: 'outlined',
        size: 'sm',
      },
      style: {
        color: colors.neutral900,
        width: 'auto',
        height: '36px',
        ...typography.bo,
        border: `1px solid ${colors.neutral300}`,
        padding: `0 ${spacings.sm}`,
        borderRadius: radius.sm,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    {
      variants: {
        variant: 'outlined',
        size: 'md',
      },
      style: {
        color: colors.neutral900,
        width: '158px',
        height: '56px',
        ...typography.bo,
        border: `1px solid ${colors.neutral300}`,
        borderRadius: radius.sm,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    {
      variants: {
        variant: 'outlined',
        size: 'lg',
      },
      style: {
        wordWrap: 'break-word',
        width: '328px',
        height: '56px',
        ...typography.bo,
        border: `1px solid ${colors.neutral300}`,
        borderRadius: radius.sm,
        display: 'flex',
        justifyContent: 'center',
      },
    },
    {
      variants: {
        variant: 'solid',
        size: 'sm',
      },
      style: {
        color: colors.white100,
        width: '158px',
        height: '56px',
        ...typography.st1,
        backgroundColor: colors.purple400,
        borderRadius: radius.sm,
        border: 'none',
        wordWrap: 'break-word',
      },
    },
    {
      variants: {
        variant: 'solid',
        size: 'md',
      },
      style: {
        color: colors.white100,
        width: '264px',
        height: '56px',
        ...typography.st1,
        backgroundColor: colors.purple400,
        wordWrap: 'break-word',
        borderRadius: radius.sm,
        border: 'none',
      },
    },
    {
      variants: {
        variant: 'solid',
        size: 'lg',
      },
      style: {
        color: colors.white100,
        width: '328px',
        height: '56px',
        ...typography.st1,
        backgroundColor: colors.purple400,
        borderRadius: radius.sm,
        border: 'none',
        wordWrap: 'break-word',
      },
    },
    {
      variants: {
        variant: 'outlined',
        selected: true,
      },
      style: {
        color: colors.purple500,
        backgroundColor: colors.purple100,
        border: `1px solid ${colors.purple500}`,
      },
    },
  ],
  defaultVariants: {
    selected: false,
  },
});

export const imageContainerStyle = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacings.sm,
  },
  variants: {
    size: {
      sm: {
        gap: spacings.xs,
      },
      md: {
        gap: spacings.sm,
      },
    },
  },
});

export const imageStyle = recipe({
  base: {},
  variants: {
    size: {
      sm: {
        width: '16px',
        height: '16px',
      },
      md: {
        width: '100px',
        height: '100px',
      },
    },
  },
});
