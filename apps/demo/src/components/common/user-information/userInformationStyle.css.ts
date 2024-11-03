import { colors, radius, spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const HEADER_HEIGHT = 48;
export const CTA_HEIGHT = 109;

export const OVERLAP_HEIGHT = 20;
export const CONTAINER_OFFSET_HEIGHT = HEADER_HEIGHT + CTA_HEIGHT;

export const layoutStyle = recipe({
  base: {
    paddingTop: spacings.xxl,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    overflow: 'scroll',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    padding: '0 16px',
    '::-webkit-scrollbar': {
      display: 'none',
    },
  },
  variants: {
    hasCTAButton: {
      true: { height: `calc(100vh - ${CONTAINER_OFFSET_HEIGHT - OVERLAP_HEIGHT + 12}px - env(safe-area-inset-top))` },
      false: { height: '100vh' },
    },
  },
});

export const basicInformationAreaStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacings.sm,
  width: '100%',
  alignItems: 'center',
  marginBottom: spacings.xl,
});

export const nameAndAgeContainerStyle = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: spacings.xs,
});

export const introductionStyle = style({
  backgroundColor: colors.purple100,
  borderRadius: radius.sm,
  padding: spacings.md,
  display: 'flex',
  flexDirection: 'column',
  gap: spacings.xxl,
});

export const blockStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacings.xs,
});

export const gapStyle = style({
  height: spacings.sm,
});

export const nameContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: spacings.xs,
  marginBottom: spacings.xl,
});

export const selectedProfileBlockStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacings.sm,
});

export const informationContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacings.xl,
});

export const chipWrapper = style({
  display: 'flex',
  rowGap: spacings.sm,
  columnGap: spacings.xs,
  flexWrap: 'wrap',
});
