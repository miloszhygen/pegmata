import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import styled from 'styled-components';
import { color } from 'styled-system';

const Button = styled.button`
  /* reset */
  font-family: inherit;
  font-size: 100%;
  line-height: ${({ theme }) => theme.lineHeights.controls};
  margin: 0;
  border: 0;

  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  padding: 0.75rem 1.25rem;

  ${color}
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
