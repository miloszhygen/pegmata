import { createGlobalStyle } from 'styled-components/macro';
import { themeGet } from '@styled-system/theme-get';
import { normalize } from 'styled-normalize';
// takes this: https://necolas.github.io/normalize.css/latest/normalize.css and injects it here

import monoFont from './assets/fonts/IBM_Plex_Sans/IBMPlexMono-Regular.ttf';
import boldFont from './assets/fonts/work-sans/WorkSans-ExtraBold.otf';
import regularFont from './assets/fonts/IBM_Plex_Sans/IBMPlexSans-Regular.ttf';

import { fontNames } from './themes/typography';

const { regular, bold, mono } = fontNames;

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    @font-face {
      font-family: ${regular};
      src: url(${regularFont}) format('truetype');
    }

    @font-face {
      font-family: ${mono};
      src: url(${monoFont}) format('truetype');
    }

    @font-face {
      font-family: ${bold};
      src: url(${boldFont}) format('opentype');
    }
      
    padding: 0;
    // from CRA index.css
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
     
    background: ${themeGet('colors.background', '#e5e5e5')};
    font-family: ${themeGet('fonts.body', 'Arial, sans-serif')};
    line-height: ${themeGet('lineHeights.body', 1, 5)};
    font-size: ${themeGet('fontSizes.2', '20px')};
  }
  code {
    font-family: ${themeGet(
      'fonts.monospace',
    )} source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    font-size: inherit;
}
`;

export default GlobalStyle;
