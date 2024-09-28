import { recipe } from '@vanilla-extract/recipes';
import { colorsMap, spacings } from '../../foundations';

export const captionStyle = recipe({
  base: {
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '18px',
    height: '18px',
    textAlign: 'start',
    marginTop: spacings.xxs,
  },

  variants: {
    color: { ...colorsMap },
  },

  defaultVariants: {
    color: 'red',
  },
});
