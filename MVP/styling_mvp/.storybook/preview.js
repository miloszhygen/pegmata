import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
// import ThemeProvider from '~providers/ThemeProvider';
import { ThemeProvider } from 'styled-components';
import theme from '../src/themes/default';

/**
 * Adding the backgrounds addon to change the iframe/canvas color
 * */
addParameters({
  backgrounds: [{ name: 'lightBeige', value: '#F5F4F0', default: true }],
});

addDecorator(storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>);
