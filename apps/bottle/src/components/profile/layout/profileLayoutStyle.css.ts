import { CTA_HEIGHT, spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

/**
 * NOTE: This is a trick to make sure that
 * the Bottom CTA's gradient overlaps with the body of the Step Container.
 */
export const OVERLAP_HEIGHT = 20;
export const CONTAINER_OFFSET_HEIGHT = CTA_HEIGHT;

export const buttonContainer = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  height: `${CTA_HEIGHT}px`,
  paddingTop: spacings.xl,
  display: 'flex',
  justifyContent: 'center',
  background: 'linear-gradient(180deg, rgba(251, 251, 251, 0) 0%, #FBFBFB 25%)',
});

export const containerStyle = recipe({
  base: {
    overflow: 'scroll',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    '::-webkit-scrollbar': {
      display: 'none',
    },
    position: 'relative',
    overflowX: 'hidden',
  },
  variants: {
    hasCTAButton: {
      true: {
        height: `calc(100vh - ${CONTAINER_OFFSET_HEIGHT - OVERLAP_HEIGHT}px - env(safe-area-inset-top))`,
      },
      false: {
        height: `calc(100vh - env(safe-area-inset-top))`,
        paddingBottom: spacings.xl,
      },
    },
  },
});

export const buttonStyle = style({
  width: '100%',
  '@media': {
    'screen and (min-width: 500px)': {
      width: '360px',
    },
  },
});
