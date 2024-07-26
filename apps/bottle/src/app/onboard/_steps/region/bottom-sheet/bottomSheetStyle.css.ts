import { colors, spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';
import { CTA_HEIGHT } from '../../../_step/stepStyle.css';

export const wrapperStyle = style({
  width: '100%',
  position: 'fixed',
  bottom: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  zIndex: 100,
});

export const bodyStyle = style({
  width: '100%',
  height: '308px',
  overflow: 'scroll',
  margin: '0 auto',
});

export const layoutStyle = style({
  height: `calc(308px + ${CTA_HEIGHT}px)`,
  borderRadius: '20px 20px 0 0',
  padding: spacings.md,
  paddingTop: spacings.xl,
  margin: 0,

  backgroundColor: colors.white100,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  minWidth: '360px',
  '@media': {
    'screen and (min-width: 500px)': {
      width: '360px',
    },
  },
});

export const overlayStyle = style({
  width: '100vw',
  height: '100vh',
  backgroundColor: '#3C3C43',
  opacity: '18%',
  position: 'fixed',
  top: 0,
  left: 0,
});
