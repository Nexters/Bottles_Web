import { recipe } from '@vanilla-extract/recipes';

export const buttonStyle = recipe({
  base: {
    backgroundColor: 'purple',
  },
  variants: {
    color: {
      neutral: { background: 'whitesmoke' },
      brand: { background: 'red' },
      accent: { background: 'blue' },
    },
  },
});
