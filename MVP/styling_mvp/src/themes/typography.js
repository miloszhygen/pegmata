// Also used in GlobalStyles
export const fontNames = {
  regular: 'IBMPlexSansRegular',
  bold: 'WorkSansExtraBold',
  mono: 'IBMPlexMono',
};

// the 'heading' key used here is pointing to the 'heading' option under fontWeights block under the base object
const heading = {
  // resets //
  margin: 0,
  hyphens: 'auto',
  color: 'text',
  // resets end //
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
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
    bold: 700,
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
    heading: {
      // resets //
      margin: 0,
      hyphens: 'auto',
      color: 'text',
      // resets end //
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
};
export const styles = {
  h1: {
    ...heading,
    fontSize: [6, 7, 8],
    fontWeight: 'bold',
  },
  h2: {
    ...heading,
    fontSize: 6,
  },
  h3: {
    ...heading,
    fontFamily: 'body',
    fontSize: 5,
  },
  h4: {
    ...heading,
    fontFamily: 'body',
    fontSize: 4,
  },
  h5: {
    ...heading,
    fontSize: 2,
  },
  h6: {
    ...heading,
    fontSize: 1,
  },
  p: {
    color: 'text',
    fontFamily: 'body',
    fontWeight: 'body',
    lineHeight: 'body',
  },
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
};
