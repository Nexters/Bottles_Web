import { colors } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const avatarStyle = recipe({
  base: {
    borderRadius: '50%',
  },
  variants: {
    blur: {
      true: {
        filter: 'blur(2px)',
      },
      false: {},
    },
  },
});

export const placeholderStyle = style({
  borderRadius: '50%',
  backgroundColor: colors.neutral200,
});
