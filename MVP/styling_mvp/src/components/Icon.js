import styled from 'styled-components/macro';
import { themeGet } from '@styled-system/theme-get';
import { compose, space, layout, flexbox, position } from 'styled-system';

const Icon = styled.img`
  width: 32px;
  @media (min-width: ${themeGet('breakpoints[1]')}) {
    width: 48px;
  }
  ${compose(space, layout, flexbox, position)}
`;

export default Icon;
