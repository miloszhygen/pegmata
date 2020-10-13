/** @jsx jsx */
import { jsx, Heading, Link } from 'theme-ui';
import { HeadingWrapper, MyHeading, H1, H3 } from './Heading';

// This default export determines where your story goes in the story list
export default {
  title: 'Components/Heading',
  component: Heading,
};

// We create a “template” of how args map to rendering
const Template = args => <Heading {...args} />;
const MyTemplate = args => <MyHeading {...args} />;
const TemplateWrapper = args => <HeadingWrapper {...args} />;

// Each story then reuses that template
export const h1Primary = Template.bind({});
h1Primary.args = {
  as: 'h1',
  children: 'This is the biggest header',
};

export const h2Primary = Template.bind({});
h2Primary.args = {
  as: 'h2',
  color: 'primary',
  children: 'This is the second biggest header with primary color',
};

export const h3 = MyTemplate.bind({});
h3.args = {
  as: 'h3',
  children: 'This is the third biggest header',
};

export const h3Caps = Template.bind({});
h3Caps.args = {
  as: 'h3',
  color: 'primary',
  variant: 'text.caps',
  children: 'This is the third biggest header with primary color and all caps',
};

// It works when I use the variant option, but an element can only have 1 variant so this isnt sustainable
export const h4 = Template.bind({});
h4.args = {
  as: 'h4',
  variant: `styles.h4`,
  children: 'This is the fourth biggest header',
};

export const h5 = Template.bind({});
h5.args = {
  as: 'h5',
  variant: `styles.h5`,
  children: 'This is the fifth biggest header',
};

export const h6 = Template.bind({});
h6.args = {
  as: 'h6',
  variant: `styles.h6`,
  children: 'This is the sixth biggest header',
};

export const LinkHeading = TemplateWrapper.bind({});
LinkHeading.args = {
  as: 'h3',
  variant: 'text.noUnderline',
  children: <Link href="https://www.ap.no">Aftenposten</Link>,
};

export const h1Custom = args => <H1 {...args} />;
h1Custom.args = {
  children: 'This is the biggest header',
};

// This doesnt work, variant does not get applied
export const h3Custom = args => <H3 {...args} />;
h3Custom.args = {
  variant: 'text.caps',
  children: 'This is the third biggest header',
};
