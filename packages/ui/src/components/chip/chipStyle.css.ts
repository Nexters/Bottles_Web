import { recipe } from '@vanilla-extract/recipes';
import { colors, radius, spacings, typography } from '../../foundations';

export const chipStyle = recipe({
  base: {
    width: 'fit-content',
    height: '36px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...typography.bo,
    borderRadius: radius.xs,
    padding: `0 ${spacings.sm}`,
  },
  variants: {
    active: {
      false: {
        backgroundColor: colors.white100,
        color: colors.neutral900,
        border: `1px solid ${colors.neutral300}`,
      },
      true: {
        color: colors.purple500,
        backgroundColor: colors.purple100,
        border: `1px solid ${colors.purple500}`,
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});
