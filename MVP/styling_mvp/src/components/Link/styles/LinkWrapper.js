import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';
import { themeGet } from '@styled-system/theme-get';
import { space } from 'styled-system';

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
  listUnderline: false,
  secondary: false,
};

LinkWrapper.propTypes = {
  listUnderline: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default LinkWrapper;
