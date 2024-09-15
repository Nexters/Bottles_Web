import { spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const wrapperStyle = style({
  margin: '0 auto',
  width: '296px',
  height: '113px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const avatarAreaStyle = style({
  width: '80px',
  height: '80px',
  position: 'relative',
});
export const editButtonStyle = style({
  width: '24px',
  height: '24px',
  position: 'absolute',
  bottom: 0,
  right: 5,
  background: 'none',
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const userInfoAreaStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: spacings.xs,
});
