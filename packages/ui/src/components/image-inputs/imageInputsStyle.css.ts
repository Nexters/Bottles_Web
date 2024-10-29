import { style } from '@vanilla-extract/css';
import { colors, radius, spacings } from '../../foundations';

export const imagesContainer = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'flex-start',
});

export const imageFrameBlock = style({
  width: '104px',
  display: 'flex',
  flexDirection: 'column',
  gap: spacings.xs,
});

export const imageFrame = style({
  width: '104px',
  height: '104px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  backgroundColor: colors.neutral300,
  borderRadius: radius.md,
  overflow: 'hidden',
});

export const placeholder = style({
  width: '104px',
  height: '104px',
  border: `1px solid ${colors.neutral300}`,
  borderRadius: radius.md,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  backgroundColor: colors.white100,
});

export const deleteButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: spacings.xs,
  right: spacings.xs,
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  backgroundColor: colors.white100,
  border: `1px solid ${colors.neutral300}`,
});
