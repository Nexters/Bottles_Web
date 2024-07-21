import { recipe } from '@vanilla-extract/recipes';

export const paragraphStyle = recipe({
  base: '',
  variants: {
    typography: {
      t1: {
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 1.3,
      },
      t2: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 1.3,
      },
      st1: {
        fontSize: 16,
        fontWeight: 'semibold',
        lineHeight: 1.3,
      },
      st2: {
        fontSize: 14,
        fontWeight: 'semibold',
        lineHeight: 1.3,
      },
      bo: {
        fontSize: 14,
        fontWeight: 'medium',
        lineHeight: 1.5,
      },
      ca: {
        fontSize: 12,
        fontWeight: 'medium',
        lineHeight: 1.5,
      },
      kl: {
        fontSize: 14,
        fontWeight: 'medium',
        lineHeight: 1.4,
        letterSpacing: '0.15px',
      },
    },
  },

  defaultVariants: {
    typography: 'bo',
  },
});
