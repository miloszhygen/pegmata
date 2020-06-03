import React from 'react';
import { addParameters } from '@storybook/react';
// Import styles
import '../src/scss/main.scss';
/**
 * Adding the backgrounds addon to change the iframe/canvas color
 * */
addParameters({
  backgrounds: [{ name: 'lightBeige', value: '#F5F4F0', default: true }],
});
