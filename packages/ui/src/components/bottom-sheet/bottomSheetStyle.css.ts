import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { spacings, colors } from '../../foundations';

export const CTA_HEIGHT = 109;

export const wrapperStyle = style({
  width: '100%',
  position: 'fixed',
  bottom: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  zIndex: 100,
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const bodyStyle = recipe({
  base: {
    width: '100%',
    height: '308px',
    overflow: 'scroll',
    margin: '0 auto',
    '::-webkit-scrollbar': {
      display: 'none',
    },
  },
  variants: {
    size: {
      sm: {
        height: '232px',
      },
      lg: {
        height: '308px',
      },
    },
  },
});

export const layoutStyle = recipe({
  base: {
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
    '::-webkit-scrollbar': {
      display: 'none',
    },
  },
  variants: {
    size: {
      sm: {
        height: `calc(232px + ${CTA_HEIGHT}px)`,
      },
      lg: {
        height: `calc(308px + ${CTA_HEIGHT}px)`,
      },
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

export const buttonContainer = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  height: `${CTA_HEIGHT}px`,
  paddingTop: spacings.xl,
  display: 'flex',
  justifyContent: 'center',
});

export const buttonStyle = style({
  width: '100%',
  '@media': {
    'screen and (min-width: 500px)': {
      width: '360px',
    },
  },
});
