import { recipe } from '@vanilla-extract/recipes';
import { colorsMap } from '../../foundations';

export const captionStyle = recipe({
  base: {
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '18px',
    height: '18px',
    textAlign: 'start',
  },

  variants: {
    color: { ...colorsMap },
  },

  defaultVariants: {
    color: 'red',
  },
});
