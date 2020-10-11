import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import GlobalStyles from '../src/GlobalStyles';
import ThemeProvider from '../src/providers/ThemeProvider';
// https://github.com/system-ui/theme-ui/issues/539
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
    <>
      <GlobalStyles />
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    </>
  ),
];
