import { style } from '@vanilla-extract/css';
import { spacings } from '../../../systems';

export const containerStyle = style({
  width: '100vw',
  padding: `0 ${spacings.md}`,
});

export const variantOneStyle = style({
  width: '100%',
});
