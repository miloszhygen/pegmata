import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { themeGet } from '@styled-system/theme-get';
import propTypes from '@styled-system/prop-types';
import { color, space, layout, typography, compose } from 'styled-system';

const Heading = styled.div`
  font-family: ${themeGet('fonts.heading', 'Roboto, sans-serif')};
  line-height: ${themeGet('lineHeights.heading', 1, 5)};
  font-weight: ${themeGet('fontWeights.heading', 800)};

  ${compose(color, space, layout, typography)}
`;

Heading.defaultProps = {
  color: 'text',
};

Heading.propTypes = {
  children: PropTypes.node,
  ...propTypes.color,
  ...propTypes.space,
  ...propTypes.layout,
};

export default Heading;

const H1 = ({ children, ...rest }) => (
  <Heading as="h1" fontSize={[5, 6, 7, 8, 8]} fontWeight="bold" {...rest}>
    {children}
  </Heading>
);
const H2 = ({ children, ...rest }) => (
  <Heading as="h2" fontSize={[4, 5, 6, 6, 6]} {...rest}>
    {children}
  </Heading>
);
const H3 = ({ children, ...rest }) => (
  <Heading as="h3" fontSize={[4, 4, 5, 5]} fontFamily="body" {...rest}>
    {children}
  </Heading>
);
const H4 = ({ children, ...rest }) => (
  <Heading as="h4" fontSize={[2, 3, 3, 4]} fontFamily="body" {...rest}>
    {children}
  </Heading>
);
const H5 = ({ children, ...rest }) => (
  <Heading as="h5" fontSize={[2, 2, 3, 3, 4]} {...rest}>
    {children}
  </Heading>
);

export { H1, H2, H3, H4, H5 };
