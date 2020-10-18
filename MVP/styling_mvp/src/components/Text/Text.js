import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';
import { themeGet } from '@styled-system/theme-get';
import { compose, space, color, typography } from 'styled-system';

const truncateStyles = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const upperCaseStyle = css`
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

const textUnderlineStyle = css`
  text-decoration: underline;
`;

/**
 * truncate: boolean (allow text to be truncated with ellipsis. remember to set overflow to hidden on parent container)
 */
const Text = styled.p`
  font-family: ${themeGet('fonts.body', 'Roboto, sans-serif')};
  line-height: ${themeGet('lineHeights.body', 1.5)};
  font-weight: ${({ bold }) => themeGet(bold ? 'fontWeights.bold' : 'fontWeights.body', 400)};
  word-break: break-word;

  ${({ truncate }) => truncate && truncateStyles}
  ${({ upperCase }) => upperCase && upperCaseStyle}
  ${({ underline }) => underline && textUnderlineStyle}

  ${compose(space, color, typography)}
`;

Text.defaultProps = {
  color: 'text',
  upperCase: false,
  bold: false,
  underline: false,
};

Text.propTypes = {
  color: PropTypes.string,
  upperCase: PropTypes.bool,
  bold: PropTypes.bool,
  underline: PropTypes.bool,
  truncate: PropTypes.bool,
};

export default Text;
