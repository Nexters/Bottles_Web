import { style } from '@vanilla-extract/css';
import { spacings, colors, radius } from '../../foundations';

export const containerStyle = style({
  width: '100%',
  padding: `${spacings.xl} ${spacings.sm}`,
  backgroundColor: colors.white100,
  borderRadius: radius.xl,
  border: `1px solid ${colors.neutral300}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: spacings.lg,
});
export const separatorStyle = style({
  width: '100%',
  height: '1px',
  backgroundColor: colors.neutral200,
});

export const checkboxStyle = style({
  width: 0,
  height: 0,
  display: 'none',
});

export const agreementListContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacings.md,
});

export const agreementItemStyle = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: spacings.xs,
});
