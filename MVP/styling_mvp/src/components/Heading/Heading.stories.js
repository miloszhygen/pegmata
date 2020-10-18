import React from 'react';

import Heading, { H1, H2, H3, H4, H5 } from './index';

// This default export determines where your story goes in the story list
export default {
  title: 'Heading',
  component: Heading,
};

// We create a “template” of how args map to rendering
const TemplateH1 = args => <H1 {...args} />;
const TemplateH2 = args => <H2 {...args} />;
const TemplateH3 = args => <H3 {...args} />;
const TemplateH4 = args => <H4 {...args} />;
const TemplateH5 = args => <H5 {...args} />;

// Each story then reuses that template
export const Heading1 = TemplateH1.bind({});
Heading1.args = {
  children: 'The biggest heading',
};

// Each story then reuses that template
export const Heading2 = TemplateH2.bind({});
Heading2.args = {
  children: 'The second biggest heading',
};

// Each story then reuses that template
export const Heading3 = TemplateH3.bind({});
Heading3.args = {
  children: 'The third biggest heading',
};

// Each story then reuses that template
export const Heading4 = TemplateH4.bind({});
Heading4.args = {
  children: 'The second smallest heading',
};

// Each story then reuses that template
export const Heading5 = TemplateH5.bind({});
Heading5.args = {
  children: 'The smallest heading',
};
