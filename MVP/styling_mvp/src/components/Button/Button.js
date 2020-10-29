import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import { color, space, layout, compose } from 'styled-system';

// TODO: getTheme
const Button = styled.button`
  line-height: ${({ theme }) => theme.lineHeights.controls};
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  padding: 0.75rem 1.25rem;
  text-rendering: optimizeLegibility;

  ${compose(color, space, layout)}
`;

Button.defaultProps = {
  disabled: false,
  type: 'secondary',
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  children: PropTypes.node,
  ...propTypes.color,
};
export default Button;
