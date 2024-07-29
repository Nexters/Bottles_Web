import { colors, radius, spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const layoutStyle = style({
  paddingTop: '80px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
});

export const introductionStyle = style({
  backgroundColor: colors.purple100,
  borderRadius: radius.sm,
  padding: spacings.md,
  display: 'flex',
  flexDirection: 'column',
  marginTop: spacings.xl,
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
