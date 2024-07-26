import { spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const tabBarStyle = style({
  width: '100%',
  display: 'flex',
  gap: spacings.sm,
  marginBottom: spacings.xl,
});

export const listStyle = style({
  width: '100%',
  height: '208px',
  overflow: 'scroll',
  display: 'flex',
  flexDirection: 'column',
  gap: spacings.sm,
});

export const itemStyle = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
});
