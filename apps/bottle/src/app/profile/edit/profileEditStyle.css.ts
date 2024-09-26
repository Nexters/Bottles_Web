import { HEADER_HEIGHT } from '@/features/steps/stepStyle.css';
import { colors, radius, spacings, typography } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const contentsContainerStyle = style({
  width: '100%',
  height: `calc(100vh - ${HEADER_HEIGHT}px + env(safe-area-inset-top))`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'scroll',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const introductionBoxStyle = style({
  width: '100%',
  height: 'auto',
  padding: spacings.md,
  borderRadius: radius.md,
  color: colors.neutral900,
  backgroundColor: colors.purple100,
  ...typography.bo,
});

export const profileItemStyle = style({
  width: '100%',
  height: '44px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: spacings.xs,
});
export const profileItemLeftStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});
