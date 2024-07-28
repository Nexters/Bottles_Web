export const spacings = {
  xxl: '32px',
  xl: '24px',
  lg: '20px',
  md: '16px',
  sm: '12px',
  xs: '8px',
  xxs: '4px',
} as const;

export type Spacing = keyof typeof spacings;
