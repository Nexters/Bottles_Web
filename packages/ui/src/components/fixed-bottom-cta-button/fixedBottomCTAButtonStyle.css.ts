import { style } from '@vanilla-extract/css';
import { CTA_HEIGHT } from '../../constants';
import { spacings } from '../../foundations';

export const buttonContainer = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  height: `${CTA_HEIGHT}px`,
  paddingTop: spacings.xl,
  paddingBottom: 'env(safe-area-inset-bottom)',
  display: 'flex',
  justifyContent: 'center',
  background: 'linear-gradient(180deg, rgba(251, 251, 251, 0) 0%, #FBFBFB 25%)',
});

export const buttonStyle = style({
  width: '100%',
  '@media': {
    'screen and (min-width: 500px)': {
      width: '360px',
    },
  },
});
