import React from 'react';
import Text from './index';

// This default export determines where your story goes in the story list
export default {
  title: 'Text',
  component: Text,
};

// We create a “template” of how args map to rendering
const Template = args => <Text {...args} />;

// TODO: for testing purposes should there be a story for each prop?

// Each story then reuses that template
export const Standard = Template.bind({});
Standard.args = {
  upperCase: false,
  bold: false,
  underline: false,
  truncate: false,
  color: 'text',
  children:
    "Often when working on responsive layouts, it's useful to adjust styles along a singular dimension – such as font-size, margin, padding, and width. Instead of manually managing media queries and adding nested style objects throughout a code base, Styled System offers a convenient shorthand syntax for adding responsive styles with a mobile-first approach. While this syntax can seem odd at first, it can become a powerful way to manage responsive typography and layouts.",
};
