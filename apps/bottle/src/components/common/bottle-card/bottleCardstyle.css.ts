import { colors, radius, spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const cardStyle = style({
  padding: `${spacings.lg} ${spacings.md}`,
  display: 'flex',
  flexDirection: 'column',
  gap: spacings.lg,
  backgroundColor: colors.white100,
  borderRadius: '20px',
  border: `1px solid ${colors.neutral300}`,
});

export const timeTagStyle = style({
  padding: `${spacings.xxs} ${spacings.xs}`,
  backgroundColor: colors.purple100,
  borderRadius: radius.xs,
  width: 'fit-content',
});

export const introductionBoxStyle = style({
  width: '296px',
  height: '95px',
  backgroundColor: colors.neutral100,
  padding: spacings.md,
  borderRadius: radius.md,
});

export const userInformationAreaStyle = style({
  width: '100%',
  height: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
});

export const userPreviewStyle = style({
  width: 'auto',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const userInformationItemsStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: spacings.xs,
});

export const avatarAreaStyle = style({
  width: '48px',
  height: '48px',
  position: 'relative',
});
