import { colors, spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const embla = style({
  overflow: 'hidden',
  width: '100%',
  height: '188px',
  padding: `${spacings.md} ${spacings.lg}`,
  paddingBottom: 0,
  border: `1px solid ${colors.neutral300}`,
  backgroundColor: colors.white100,
  borderRadius: '20px',
});

export const emblaContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  alignItems: 'center',
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

export const newEmbla = style({
  overflow: 'hidden',
  width: '100%',
  height: 'auto',
});

export const newEmblaContainer = style({
  display: 'flex',
  height: '100%',
  width: '100%',
});

export const idSearchBox = style({
  width: '185px',
  height: '68px',
  backgroundColor: colors.neutral100,
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: spacings.xs,
  padding: '10.5px 0',
  marginTop: spacings.sm,
});

export const toggleSearchBox = style({
  width: '243px',
  height: '68px',
  backgroundColor: colors.neutral100,
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  gap: spacings.xs,
  padding: `${spacings.md} ${spacings.sm} ${spacings.md} ${spacings.md}`,
  marginTop: spacings.sm,
});

export const searchDescriptionArea = style({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
});
