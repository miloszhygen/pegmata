/* eslint-disable react/display-name, no-unused-vars */
import React from 'react';
import { Global, css } from '@emotion/core';

import monoFont from './assets/fonts/IBM_Plex_Sans/IBMPlexMono-Regular.ttf';
import boldFont from './assets/fonts/work-sans/WorkSans-ExtraBold.otf';
import regularFont from './assets/fonts/IBM_Plex_Sans/IBMPlexSans-Regular.ttf';

// TODO: unsure where to store the fontNames
import { fontNames } from './themes/theme';

const { regular, bold, mono } = fontNames;

// TODO: keeping theme var here even though not used for now, remove if it doesnt get used
export default () => (
  <Global
    styles={theme => css`
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
    `}
  />
);
