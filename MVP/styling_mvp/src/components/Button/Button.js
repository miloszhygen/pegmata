import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import { color } from 'styled-system';

const Button = styled.button`
  line-height: ${({ theme }) => theme.lineHeights.controls};
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
