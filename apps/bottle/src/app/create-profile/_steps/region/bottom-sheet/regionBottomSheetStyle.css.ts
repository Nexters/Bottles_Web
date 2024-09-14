import { spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const tabBarStyle = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  marginBottom: spacings.xl,
});

export const tabItemsStyle = style({
  display: 'flex',
  gap: spacings.xxs,
  alignItems: 'center',
});

export const listStyle = style({
  width: '100%',
  height: '208px',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: spacings.sm,
});

export const itemStyle = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
});

export const closeIconStyle = style({});
