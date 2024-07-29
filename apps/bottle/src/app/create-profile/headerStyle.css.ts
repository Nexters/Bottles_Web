import { style } from '@vanilla-extract/css';
import { HEADER_HEIGHT } from './_step/stepStyle.css';

export const headerStyle = style({
  width: '100%',
  height: `${HEADER_HEIGHT}px`,
  position: 'sticky',
  left: 0,
  top: 0,
  display: 'flex',
  alignItems: 'center',
});
