import React from 'react';
import Header from './index';

// This default export determines where your story goes in the story list
export default {
  title: 'Header',
  component: Header,
};

// We create a “template” of how args map to rendering
const Template = args => <Header {...args} />;

// Each story then reuses that template
export const Standard = Template.bind({});
Standard.args = {};

// Each story then reuses that template
export const Colored = Template.bind({});
Colored.args = {
  bg: 'primary',
};
