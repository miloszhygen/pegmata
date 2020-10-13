import styled from 'styled-components';
import { compose, space, layout, background } from 'styled-system';

const Section = styled.section`
  padding: 1.25rem;

  ${compose(space, layout, background)}
`;

export default Section;
