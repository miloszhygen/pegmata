import styled from 'styled-components/macro';
import { themeGet } from '@styled-system/theme-get';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import { space, layout, compose } from 'styled-system';

const LinkButtonElement = styled.a`
  box-sizing: border-box;
  display: inline-block;
  color: ${themeGet('colors.text')};
  background-color: ${({ secondary }) =>
    themeGet(secondary ? 'colors.buttons.secondary' : 'colors.buttons.primary')};
  border: ${themeGet('borders.button')};
  border-radius: ${themeGet('radii.button')};
  cursor: pointer;
  text-decoration: none;

  ${compose(space, layout)};
`;

LinkButtonElement.defaultProps = {
  secondary: false,
};
LinkButtonElement.propTypes = {
  secondary: PropTypes.bool,
  href: PropTypes.string,
  ...propTypes.space,
};

export default LinkButtonElement;
