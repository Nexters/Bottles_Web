import { colors } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const layoutStyle = style({
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
  backgroundColor: colors.white100,
  margin: '0 auto',
});
