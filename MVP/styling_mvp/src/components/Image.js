import styled from 'styled-components';
import { compose, space, layout, flexbox, border, position, shadow } from 'styled-system';

const Image = styled.img`
  ${compose(space, layout, flexbox, border, position, shadow)}
`;

export default Image;
