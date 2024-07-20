import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const mainStyle = style({
  padding: '40px 30px',
  minHeight: 'calc(100vh - 180px)',
  background: 'linear-gradient(white, #f7f5f9)',
});

export const layoutStyle = style({
  width: '100%',
  minWidth: '375px',
  '@media': {
    'screen and (min-width: 500px)': {
      width: '375px',
    },
  },
  height: 'auto',
  minHeight: '100vh',
  backgroundColor: 'whitesmoke',
  margin: '0 auto',
});

export const footerStyle = style({
  width: '100%',
  height: '180px',
  borderTop: '1px solid black',
  backgroundColor: 'rgb(36, 36, 40)',
  padding: '30px 20px',
});

export const nameContainer = style({
  marginBottom: '20px',
});

export const boxStyle = recipe({
  base: {
    display: 'flex',
  },
  variants: {
    margin: {
      none: {},
      normal: {
        marginBottom: '8px',
      },
      large: {
        marginBottom: '20px',
      },
    },
  },
  defaultVariants: {
    margin: 'normal',
  },
});
