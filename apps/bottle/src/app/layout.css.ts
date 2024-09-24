import { colors, spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const layoutStyle = recipe({
  base: {
    width: '100%',
    minWidth: '360px',
    padding: '0 16px',
    '@media': {
      'screen and (min-width: 500px)': {
        width: '360px',
      },
    },
    height: 'auto',
    minHeight: '100vh',
    backgroundColor: colors.neutral50,
    margin: '0 auto',
    position: 'relative',
  },
  variants: {
    notch: {
      true: {
        paddingTop: 'env(safe-area-inset-top)',
      },
      false: {},
    },
  },
});

export const errorImageContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: spacings.xl,
});
