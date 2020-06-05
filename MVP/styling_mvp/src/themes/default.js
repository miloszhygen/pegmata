const theme = {
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
  defaults: {
    borderRadius: '.25rem',
    columnGap: '.625rem', // This is divided by two. The actual gap with .625 rem will be 1.25rem
  },
};

export default theme;
