import styled from 'styled-components';
import { color } from 'styled-system';

const Button = styled.button`
  /* reset */
  font-size: 100%;
  font-family: inherit;
  border: 0;

  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  padding: 0.75rem 1.25rem;

  ${color}
`;

export default Button;
