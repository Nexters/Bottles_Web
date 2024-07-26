import { colors } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const scrollContainerStyle = style({});

export const itemStyle = recipe({
  base: {
    background: 'none',
    border: 'none',
    width: '100%',
    height: '56px',
  },

  variants: {
    selected: {
      true: {
        background: colors.white100,
        border: `1px solid ${colors.neutral300}`,
      },
    },
  },
});
