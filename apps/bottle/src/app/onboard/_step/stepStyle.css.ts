import { spacings } from '@bottlesteam/ui';
import { style } from '@vanilla-extract/css';

export const HEADER_HEIGHT = 48;
const CTA_HEIGHT = 109;
const CONTAINER_OFFSET_HEIGHT = HEADER_HEIGHT + CTA_HEIGHT;

export const buttonContainer = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  height: `${CTA_HEIGHT}px`,
  paddingTop: spacings.xl,
});

export const containerStyle = style({
  height: `calc(100vh - ${CONTAINER_OFFSET_HEIGHT}px)`,
  overflow: 'scroll',
});
