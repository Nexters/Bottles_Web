import { colors, spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const layoutStyle = style({
  width: '100%',
  minWidth: '360px',
  '@media': {
    'screen and (min-width: 900px)': {
      width: '360px',
    },
  },
  height: '100vh',
  backgroundColor: colors.neutral50,
  margin: '0 auto',
  position: 'relative',
});

export const errorImageContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: spacings.xl,
});
