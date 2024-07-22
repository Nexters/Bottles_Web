import { recipe } from '@vanilla-extract/recipes';
import { colors, radius, spacings, typography } from '../../systems';

export const imageButtonStyle = recipe({
  base: {
    ':active': {
      backgroundColor: colors.purple100,
      color: colors.purple500,
    },
    ':disabled': {
      backgroundColor: colors.white100,
      color: colors.neutral400,
      border: `1px solid ${colors.neutral300}`,
    },
  },
  variants: {
    size: {
      sm: {
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
        gap: spacings.xs,
      },
      md: {
        color: colors.neutral900,
        ...typography.bo,
        border: `1px solid ${colors.neutral300}`,
        borderRadius: radius.sm,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: spacings.sm,
        padding: `23.5px 21px`,
      },
    },
  },
});
