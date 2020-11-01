import React from 'react';
import Link, { LinkButton } from './index';

export default {
  title: 'Link',
  component: Link,
};

const LinkTemplate = args => <Link {...args} />;

const LinkButtonTemplate = args => <LinkButton {...args} />;

export const PlainLink = LinkTemplate.bind({});
PlainLink.args = {
  text: 'slik virker det',
  href: '#',
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
