import { style } from '@vanilla-extract/css';
import { colors } from '../../foundations';

export const HEADER_HEIGHT = 48;
/**
 * NOTE: should not have margin since it should be sticky
 */
export const headerStyle = style({
  width: '100vw',
  height: `${HEADER_HEIGHT}px`,
  position: 'sticky',
  right: 0,
  top: 0,
  display: 'flex',
  alignItems: 'center',
  padding: '0 16px',
  zIndex: 2,
  backgroundColor: colors.neutral50,
});
