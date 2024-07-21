import { recipe } from '@vanilla-extract/recipes';
import { colorsMap } from '../../systems/colors';
import { typography } from '../../systems/typography';

export const paragraphStyle = recipe({
  base: '',
  variants: {
    color: colorsMap,
    typography: typography,
  },

  defaultVariants: {
    typography: 'bo',
    color: 'black100',
  },
});
