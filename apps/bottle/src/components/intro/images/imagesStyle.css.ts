import { colors, spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const embla = style({
  overflow: 'hidden',
  width: '100%',
  height: '188px',
  padding: `${spacings.md} ${spacings.lg}`,
  paddingBottom: 0,
  border: `1px solid ${colors.neutral300}`,
  borderRadius: '20px',
});

export const emblaContainer = style({
  display: 'flex',
  height: '100%',
  width: '100%',
});

export const emblaSlide = style({
  flex: '0 0 100%',
  width: '100%',
  marginRight: spacings.lg,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
});
