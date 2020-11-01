import React from 'react';
import Link, { LinkButton } from './index';

export default {
  title: 'Link',
  component: Link,
};

const LinkTemplate = args => <Link {...args} />;
const LinkArrowTemplate = ({ listUnderline, secondary = false, height, ...rest }) => (
  <Link.LinkWrapper listUnderline={listUnderline} secondary={secondary}>
    <Link.LinkArrow left height={height} />
    <Link secondary={secondary} {...rest} />
  </Link.LinkWrapper>
);
const LinkButtonTemplate = args => <LinkButton {...args} />;

export const PlainLink = LinkTemplate.bind({});
PlainLink.args = {
  text: 'slik virker det',
  href: '#',
};

export const ArrowLink = LinkArrowTemplate.bind({});
ArrowLink.args = {
  listUnderline: true,
  noUnderline: true,
  text: 'slik virker det',
  lineHeight: 'list',
  href: '#',
  fontSize: [16, 16, 24, 24, 24],
  height: [16, 16, 24, 24, 24],
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
