import styled from 'styled-components/macro';
import { themeGet } from '@styled-system/theme-get';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import { compose, space, typography, layout } from 'styled-system';

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

LinkElement.defaultProps = {
  secondary: false,
  noUnderline: false,
};

LinkElement.propTypes = {
  href: PropTypes.string,
  secondary: PropTypes.bool,
  noUnderline: PropTypes.bool,
  ...propTypes.typography,
  ...propTypes.space,
  ...propTypes.layout,
};

export default LinkElement;
