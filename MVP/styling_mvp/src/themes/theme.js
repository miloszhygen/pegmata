// this theme is based on the basic template
import typography, { styles as typoStyles } from './typography';

const palette = {
  grey: '#e5e5e5',
  black: '#161616',
  orange: '#e56c41',
  yellow: '#fcc135',
  white: '#ffffff',
  blue: '#315784',
  red: '#e55441',
};

export const base = {
  breakpoints: [
    '40em',
    '56em',
    '64em', // TODO: change these to px
  ],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  ...typography,
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
    link: palette.orange,
    focus: palette.blue,
  },
  styles: {
    // the stuff inside root gets applied to the body element
    // sort out what should go in the index.css file and here (everything here?)
    root: {
      height: '100%',
      width: '100%',
      margin: 0,
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    ...typoStyles,
  },
};
console.log('theme: ', base);
export default base;
