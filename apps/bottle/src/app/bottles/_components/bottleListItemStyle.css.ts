import { colors, radius, spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const itemStyle = style({
  width: '100%',
  height: '125px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: `0 ${spacings.md}`,
  gap: spacings.sm,
  border: `1px solid ${colors.neutral300}`,
  borderRadius: '20px',
  backgroundColor: colors.white100,
  cursor: 'pointer',
});

export const timeLabelStyle = style({
  width: 'fit-content',
  height: '29px',
  padding: `0 ${spacings.xs}`,
  borderRadius: radius.xs,
  backgroundColor: colors.purple100,
  display: 'flex',
  alignItems: 'center',
});

export const userInfoContainerStyle = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

export const userInfoStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  gap: spacings.xs,
});
export const imageContainerStyle = style({
  width: '48px',
  height: '48px',
  borderRadius: '24px',
  backgroundColor: colors.neutral200,
});
