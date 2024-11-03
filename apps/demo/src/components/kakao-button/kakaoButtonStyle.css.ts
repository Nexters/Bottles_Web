import { spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const logoContainer = style({
  height: '100%',
  position: 'absolute',
  left: spacings.lg,
  width: 'auto',
  display: 'flex',
  alignItems: 'center',
});

export const buttonContainer = style({
  width: '100%',
  minWidth: '360px',
  '@media': {
    'screen and (min-width: 900px)': {
      width: '360px',
    },
  },
  margin: '0 auto',
  position: 'fixed',
  bottom: 20,
  display: 'flex',
});
