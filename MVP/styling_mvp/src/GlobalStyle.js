import { createGlobalStyle } from 'styled-components';

import monoFont from './assets/fonts/IBM_Plex_Sans/IBMPlexMono-Regular.ttf';
import boldFont from './assets/fonts/work-sans/WorkSans-ExtraBold.otf';
import regularFont from './assets/fonts/IBM_Plex_Sans/IBMPlexSans-Regular.ttf';

import { fontNames } from './themes/typography';

const { regular, bold, mono } = fontNames;

const GlobalStyle = createGlobalStyle`
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
      
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.body};
    line-height: ${({ theme }) => theme.lineHeights.body};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    // from standard index.css
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: ${({ theme }) =>
      theme.fonts.mono} source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export default GlobalStyle;
