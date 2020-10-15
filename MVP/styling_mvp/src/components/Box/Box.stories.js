import React from 'react';
import Box from './index';

// This default export determines where your story goes in the story list
export default {
  title: 'Box',
  component: Box,
};

const Placeholder = ({ label, color }) => (
  <span style={{ width: '100%', height: '100%', background: color, display: 'block' }}>
    {label}
  </span>
);

// We create a “template” of how args map to rendering
const Template = args => <Box {...args} />;

// Each story then reuses that template
export const Standard = Template.bind({});
Standard.args = {
  p: 2,
  mx: 'auto',
  my: 2,
  width: [1, 1, 1 / 2, 1 / 3, 1 / 4],
  h: [1, 1, 1 / 2, 1 / 3, 1 / 4],
  color: 'warning',
  bg: 'primary',
  fontSize: 2,
  children: <Placeholder label="Magical Box with all the props <3" color="lightBlue" />,
};
