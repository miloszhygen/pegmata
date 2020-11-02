import styled from 'styled-components/macro';
import { compose, space, layout, background, flexbox } from 'styled-system';

const Section = styled.section`
  ${compose(space, layout, background, flexbox)}
`;

export default Section;
