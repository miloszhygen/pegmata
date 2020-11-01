import React from 'react';
import Link, { LinkButton } from './index';

export default {
  title: 'Link',
  component: Link,
};

const LinkTemplate = args => <Link {...args} />;

const LinkButtonTemplate = args => <LinkButton {...args} />;

export const StandardLink = LinkTemplate.bind({});
StandardLink.args = {
  text: 'slik virker det',
  href: '#',
};

export const SecondaryLink = LinkTemplate.bind({});
SecondaryLink.args = {
  text: 'slik virker det',
  href: '#',
  secondary: true,
};

export const LinkButtonPrimary = LinkButtonTemplate.bind({});
LinkButtonPrimary.args = {
  text: 'slik virker det',
  href: '#',
};

export const LinkButtonSecondary = LinkButtonTemplate.bind({});
LinkButtonSecondary.args = {
  children: 'slik virker det',
  href: '#',
  secondary: true,
};
