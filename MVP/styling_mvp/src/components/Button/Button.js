/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
/*

const Button = styled.button`
  /!* reset *!/
  font-size: 100%;
  font-family: inherit;
  border: 0;

  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  padding: 0.75rem 1.25rem;

  ${color}
`;
*/

const Button = ({ children }) => (
  <button
    sx={{
      fontSize: '100%',
      fontFamily: 'inherit',
      border: '0',
      borderRadius: 0,
      padding: '0.75rem 1.25rem',
    }}
  >
    {children}
  </button>
);
Button.defaultProps = {
  disabled: false,
  type: 'secondary',
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  children: PropTypes.node,
};
export default Button;
