import { recipe } from '@vanilla-extract/recipes';

export const textStyle = recipe({
  base: {
    color: 'white',
  },
  variants: {
    color: {
      black: {
        color: 'black',
      },
      white: {
        color: 'white',
      },
    },
    typography: {
      t1: {
        fontSize: '12px',
        fontWeight: 300,
      },
      t2: {
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  defaultVariants: {
    color: 'white',
    typography: 't1',
  },
});
