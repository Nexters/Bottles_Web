import { HEADER_HEIGHT } from '@/features/steps/stepStyle.css';
import { colors, spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

const CONTROL_HEIGHT = 68;

export const controlStyle = style({
  width: '100%',
  height: `${CONTROL_HEIGHT}px`,
  display: 'flex',
  alignItems: 'center',
  gap: spacings.xs,
  marginBottom: spacings.xxl,
  position: 'sticky',
  backgroundColor: colors.neutral50,
  top: 0,
});

export const contentsContainer = style({
  width: '100%',
  height: `calc(100vh - ${HEADER_HEIGHT}px) - env(safe-area-inset-top))`,
  overflow: 'scroll',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});
