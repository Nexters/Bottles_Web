import { recipe } from '@vanilla-extract/recipes';
import { colorsMap } from '../../foundations/colors';
import { typography } from '../../foundations/typography';

export const paragraphStyle = recipe({
  base: {
    whiteSpace: 'pre-wrap',
  },
  variants: {
    color: colorsMap,
    typography: typography,
  },

  defaultVariants: {
    typography: 'bo',
    color: 'black100',
  },
});
