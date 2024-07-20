import { style } from '@vanilla-extract/css';

export const sectionStyle = style({
  marginTop: '100px',
});

export const guideTextStyle = style({
  fontSize: '20px',
  fontWeight: 600,
  lineHeight: 1.5,
});

export const strongTextStyle = style({
  fontSize: '40px',
  fontWeight: 700,
  color: '#4E65F1',
});

export const buttonStyle = style({
  width: '140px',
  height: '50px',
  borderRadius: '14px',
  backgroundColor: '#D1D3FF',
  border: 'none',
  fontSize: '16px',
  fontWeight: 600,
  cursor: 'pointer',
  boxShadow: ' 0 2px 3px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.08)',
});
