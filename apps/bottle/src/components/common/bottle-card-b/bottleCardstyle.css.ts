import { colors, radius, spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const cardStyle = style({
  padding: `${spacings.lg} ${spacings.md}`,
  display: 'flex',
  flexDirection: 'column',
  gap: spacings.sm,
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
  width: '100%',
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
/////

export const upperArea = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacings.sm,
  borderBottom: `1px solid ${colors.neutral100}`,
  paddingBottom: spacings.sm,
});
export const avatarEmojiWrapper = style({
  position: 'relative',
});

export const bubbleContainer = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: radius.md,
  border: 'none',

  left: 0,
  top: -46,
});

export const emojiContainer = style({
  display: 'flex',
  borderRadius: radius.md,
  backgroundColor: colors.white100,
  justifyContent: 'center',
  boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
  alignItems: 'center',
  width: '44px',
  height: '42px',
});

export const lowerArea = style({
  display: 'flex',
  gap: spacings.xxs,
  alignItems: 'center',
});

export const keywordChip = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: `6px ${spacings.sm}`,
  border: `1px solid ${colors.neutral300}`,
  borderRadius: radius.md,
});
