import { colors } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const layoutStyle = style({
  width: '100%',
  minWidth: '375px',
  '@media': {
    'screen and (min-width: 500px)': {
      width: '375px',
    },
  },
  height: 'auto',
  minHeight: '100vh',
  backgroundColor: colors.white100,
  margin: '0 auto',
});
