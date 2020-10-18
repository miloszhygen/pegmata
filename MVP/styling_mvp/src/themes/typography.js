// NB!!!! This is not in use in this project yet! Only using the default theme for now!
// Long term they will be separated out in separate files

// Also used in GlobalStyles
export const fontNames = {
  regular: 'IBMPlexSansRegular',
  bold: 'WorkSansExtraBold',
  mono: 'IBMPlexMono',
};

export default {
  fonts: {
    body: `${fontNames.regular}}, sans-serif`,
    heading: `${fontNames.bold}}, sans-serif`,
    monospace: `${fontNames.mono}}, sans-serif`,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96], // sass version: [13, 18, 24, 36, 60, 90]
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  // variants for text elements
  text: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
    noUnderline: {
      textDecoration: 'none',
    },
  },
};
export const styles = {
  a: {
    color: 'link',
  },
  pre: {
    fontFamily: 'monospace',
    overflowX: 'auto',
    code: {
      color: 'inherit',
    },
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
};
