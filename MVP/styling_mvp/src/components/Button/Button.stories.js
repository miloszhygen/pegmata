import React from 'react';
import Button from './Button';

// This default export determines where your story goes in the story list
export default {
  title: 'Components/Button',
  component: Button,
};

// We create a “template” of how args map to rendering
const Template = args => <Button {...args} />;

// Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'basic',
};

// Each story then reuses that template
export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  children: 'basic',
};
