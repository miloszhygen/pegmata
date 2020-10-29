import { fontNames } from './typography';

const { regular, bold, mono } = fontNames;

const palette = {
  grey: '#e5e5e5',
  black: '#161616',
  orange: '#e56c41',
  yellow: '#fcc135',
  white: '#ffffff',
  blue: '#315784',
  red: '#e55441',
};

const theme = {
  colors: {
    text: palette.black,
    textSecondary: palette.white,
    background: palette.grey,
    primary: palette.yellow,
    secondary: palette.orange,
    muted: '#f6f6f6',
    highlight: palette.orange,
    warning: palette.red,
    border: palette.black,
    link: palette.black,
    hover: palette.orange,
    focus: palette.blue,
    modes: {
      yellow: {
        // for when we make the yellow theme
      },
    },
  },
  fonts: {
    body: `${regular}, sans-serif`,
    heading: `${bold}, sans-serif`,
    monospace: `${mono}, sans-serif`,
  },
  fontSizes: ['12px', '14px', '16px', '20px', '24px', '32px', '48px', '64px', '96px'], // sass version: [13, 18, 24, 36, 60, 90]
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
    controls: 1.15,
  },
  breakpoints: ['0px', '600px', '960px', '1280px', '1920px'],
  defaults: {
    borderRadius: '.25rem',
    columnGap: '.625rem', // This is divided by two. The actual gap with .625 rem will be 1.25rem
  },
};

export default theme;
