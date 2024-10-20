import { colors, spacings, typography } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const topAreaContainer = style({
  display: 'flex',
  paddingBottom: spacings.sm,
  borderBottom: `1px solid ${colors.neutral100}`,
  gap: spacings.xs,
  alignItems: 'center',
});

export const numberBox = style({
  width: '24px',
  height: '24px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.purple100,
  color: '#615EFA',
  ...typography.st2,
});

export const middleAreaContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacings.sm,
  marginTop: spacings.lg,
});

export const bottomAreaContainer = style({
  marginTop: spacings.lg,
  width: '100%',
});
