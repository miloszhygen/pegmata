import React from 'react';
import LinkElement from './styles/LinkElement';
import LinkWrapper from './styles/LinkWrapper';
import LinkButtonElement from './styles/LinkButtonElement';
import LinkArrow from './styles/LinkArrow';

const truncateString = (str, num) => (str.length <= num ? str : str.slice(0, num) + '...');

const Link = ({ text, children, ...rest }) => (
  <LinkElement {...rest}>{children ? children : truncateString(text, 16)}</LinkElement>
);

const LinkButton = ({ text, children, ...rest }) => (
  <LinkButtonElement px={4} py={2} m={0} {...rest}>
    {children ? children : truncateString(text, 16)}
  </LinkButtonElement>
);

Link.LinkWrapper = LinkWrapper;
Link.LinkArrow = LinkArrow;

export default Link;
export { LinkButton };
