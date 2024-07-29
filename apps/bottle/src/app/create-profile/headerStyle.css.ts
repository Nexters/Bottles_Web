import { HEADER_HEIGHT } from '@/features/steps/stepStyle.css';
import { style } from '@vanilla-extract/css';

export const headerStyle = style({
  width: '100%',
  height: `${HEADER_HEIGHT}px`,
  position: 'sticky',
  left: 0,
  top: 0,
  display: 'flex',
  alignItems: 'center',
});
