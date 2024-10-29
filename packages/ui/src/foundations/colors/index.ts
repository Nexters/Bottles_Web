export const colors = {
  purple600: '#615EFA',
  purple500: '#4E65F1',
  purple400: '#8489FC',
  purple300: '#B5B8FF',
  purple200: '#D1D3FF',
  purple100: '#EAEDFF',
  neutral900: '#202020',
  neutral800: '#414141',
  neutral700: '#5F5F5F',
  neutral600: '#747474',
  neutral500: '#9E9E9E',
  neutral400: '#BCBCBC',
  neutral300: '#E0E0E0',
  neutral200: '#ECECEC',
  neutral100: '#F5F5F5',
  neutral50: '#FBFBFB',
  black100: '#000000',
  white100: '#ffffff',
  red: '#F03E3E',
  gradient: '#FBFBFB',
} as const;

export const colorsMap = Object.entries(colors).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: { color: value },
  }),
  {}
) as Record<keyof typeof colors, Record<'color', string>>;

export type Color = keyof typeof colors;
