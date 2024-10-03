import { spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const emoticonsContainer = style({
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between',
  marginTop: spacings.sm,
});
export const deleteButtonStyle = style({
  background: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
});
