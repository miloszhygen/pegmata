import styled from 'styled-components/macro';
import { compose, space, layout, background } from 'styled-system';

const Section = styled.section`
  ${compose(space, layout, background)}
`;

export default Section;
