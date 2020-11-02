import styled from 'styled-components/macro';
import { compose, space, layout, flexbox, border, position, shadow } from 'styled-system';

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  ${compose(space, layout, flexbox, border, position, shadow)}
`;

export default Image;
