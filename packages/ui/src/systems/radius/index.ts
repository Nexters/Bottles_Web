export const radius = {
  xl: '24px',
  md: '16px',
  sm: '12px',
  xs: '8px',
};

export const radiusMap = Object.entries(radius).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: { borderRadius: value },
  }),
  {}
) as Record<keyof typeof radius, Record<'borderRadius', string>>;

export type Radius = keyof typeof radius;
