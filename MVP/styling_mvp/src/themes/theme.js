/*
export default {
  colors: {
    powderWhite: '#FFFDF9',
    persianGreen: '#06B49A',
    lightBlue: '#AFDBD2',
    onyx: '#36313D',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: {
    xs: '0',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
  },
  borderRadius: '.25rem',
  columnGap: '.625rem', // This is divided by two. The actual gap with .625 rem will be 1.25rem
};
*/

// TODO: usikker på hvor disse bør ligge
export const fontNames = {
  regular: 'IBMPlexSansRegular',
  bold: 'WorkSansExtraBold',
  mono: 'IBMPlexMono',
};

const palette = {
  grey: '#e5e5e5',
  black: '#161616',
  orange: '#e56c41',
  yellow: '#fcc135',
  white: '#ffffff',
  blue: '#315784',
  red: '#e55441',
};

// the 'heading' key used here is pointing to the 'heading' option under fontWeights block under the base object
const heading = {
  color: 'text',
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
};

export const base = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: `${fontNames.regular}}, sans-serif`,
    heading: 'inherit',
    monospace: `${fontNames.mono}}, sans-serif`,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96], // sass version: [13, 18, 24, 36, 60, 90]
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: palette.black,
    textSecondary: palette.white,
    background: palette.grey,
    primary: palette.yellow,
    secondary: palette.orange,
    muted: '#f6f6f6',
    warning: palette.red,
    border: palette.black,
    link: palette.orange,
    focus: palette.blue,
  },
  styles: {
    // the stuff inside root gets applied to the body element
    // sort out what should go in the index.css file and here (everything here?)
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      height: '100%',
      width: '100%',
      margin: 0,
      backgroundColor: '', // clv-background
    },
    h1: {
      ...heading,
      fontSize: 5,
    },
    h2: {
      ...heading,
      fontSize: 4,
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
};

export default base;
