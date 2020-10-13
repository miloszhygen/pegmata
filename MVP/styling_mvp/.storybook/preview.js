import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import ThemeProvider from '../src/providers/ThemeProvider';
import GlobalStyle from '../src/GlobalStyle';

/**
 * Backgrounds addon to change the iframe/canvas color
 * */

export const parameters = {
  backgrounds: {
    default: 'lightBeige',
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'lightBeige', value: '#F5F4F0' },
    ],
  },
};

export const decorators = [
  Story => (
    <ThemeProvider>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
