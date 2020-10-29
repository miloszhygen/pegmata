import React from 'react';
import styled, { css } from 'styled-components/macro';
import { themeGet } from '@styled-system/theme-get';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import { compose, space, typography, layout } from 'styled-system';

const truncateString = (str, num) => (str.length <= num ? str : str.slice(0, num) + '...');

const linkWrapperUnderlineStyle = (listUnderline, secondary) => {
  const underline = listUnderline ? '1px' : '0';
  const color = themeGet(secondary ? 'colors.secondary' : 'colors.link');
  return css`
    box-shadow: 0 ${underline} 0 ${color};
  `;
};

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ listUnderline, secondary }) =>
    listUnderline && linkWrapperUnderlineStyle(listUnderline, secondary)};

  ${space};
`;

LinkWrapper.defaultProps = {
  secondary: false,
  listUnderline: false,
};

LinkWrapper.propTypes = {
  listUnderline: PropTypes.bool,
  secondary: PropTypes.bool,
};

// TODO: propTypes
const LinkArrow = styled.img`
  ${layout};
`;

const LinkElement = styled.a`
  color: ${({ secondary }) => themeGet(secondary ? 'colors.secondary' : 'colors.link')};
  text-decoration: ${({ noUnderline }) => (noUnderline ? 'none' : 'underline')};
  cursor: pointer;

  &:link,
  &:visited,
  &:active {
    color: ${({ secondary }) => themeGet(secondary ? 'colors.secondary' : 'colors.link')};
  }
  &:hover {
    color: ${({ secondary }) => themeGet(secondary ? 'colors.link' : 'colors.hover')};
  }
  ${compose(space, typography, layout)};
`;

const Link = ({ text, children, ...rest }) => (
  <LinkElement {...rest}>{children ? children : truncateString(text, 16)}</LinkElement>
);

Link.defaultProps = {
  secondary: false,
  noUnderline: false,
};

Link.propTypes = {
  href: PropTypes.string,
  secondary: PropTypes.bool,
  noUnderline: PropTypes.bool,
  text: PropTypes.string,
  children: PropTypes.node,
  ...propTypes.typography,
  ...propTypes.space,
  ...propTypes.layout,
};

// TODO: fix padding and margin from theme
const LinkButton = styled.a`
  box-sizing: border-box;
  display: inline-block;
  color: ${themeGet('colors.text')};
  background-color: ${({ secondary }) =>
    themeGet(secondary ? 'colors.buttons.secondary' : 'colors.buttons.primary')};
  border: 2px solid transparent;
  border-radius: ${themeGet('radii.button')};
  padding: 0.5em 2em;
  margin: 0;
  cursor: pointer;
  text-decoration: none;
`;

Link.LinkWrapper = LinkWrapper;
Link.LinkButton = LinkButton;
Link.LinkArrow = LinkArrow;

export default Link;
