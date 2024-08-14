import { colors, spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const layoutStyle = style({
  width: '100%',
  minWidth: '360px',
  padding: '0 16px',
  '@media': {
    'screen and (min-width: 500px)': {
      width: '360px',
    },
  },
  height: 'auto',
  minHeight: '100vh',
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
