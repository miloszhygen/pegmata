import React from 'react';
import styled, { css } from 'styled-components/macro';
import { themeGet } from '@styled-system/theme-get';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';

import arrowRightSrc from '../../assets/icons/arrow-right.svg';
import arrowLeftSrc from '../../assets/icons/arrow-left.svg';

const truncateString = (str, num) => (str.length <= num ? str : str.slice(0, num) + '...');

const linkWrapperUnderlineStyle = (noUnderline, secondary, theme) => {
  const underline = noUnderline ? '0' : '1px';
  const color = secondary ? theme.colors.secondary : theme.colors.link;
  return css`
    box-shadow: 0 ${underline} 0 ${color};
  `;
};

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ listUnderline, secondary, theme }) =>
  listUnderline && linkWrapperUnderlineStyle(listUnderline, secondary, theme)};
  
  // lineHeightTall
`;

const LinkArrow = styled.img`
  width: 24px;
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
`;

const Link = ({
  href,
  small,
  medium,
  secondary,
  button,
  buttonSecondary,
  noUnderline,
  listUnderline,
  lineHeightTall,
  arrow,
  arrowLeft,
  text,
  children,
}) => (
  <LinkWrapper listUnderline={listUnderline} secondary={secondary} lineHeightTall={lineHeightTall}>
    {arrowLeft && <LinkArrow src={arrowLeftSrc} alt="arrow-left" />}
    <LinkElement noUnderline={noUnderline||listUnderline} secondary={secondary} href={href}>
      {children ? children : truncateString(text, 16)}
    </LinkElement>
    {arrow && <LinkArrow src={arrowRightSrc} alt="arrow-right" />}
  </LinkWrapper>
);

Link.defaultProps = {
  secondary: false,
  noUnderline: false,
};

Link.propTypes = {
  href: PropTypes.string,
  arrow: PropTypes.bool,
  arrowLeft: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  secondary: PropTypes.bool,
  button: PropTypes.bool,
  buttonSecondary: PropTypes.bool,
  noUnderline: PropTypes.bool,
  listUnderline: PropTypes.bool,
  lineHeightTall: PropTypes.bool,
  text: PropTypes.string,
  children: PropTypes.node,
};

export default Link;
