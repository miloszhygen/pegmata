import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { compose, space, layout, size } from 'styled-system';
import themeGet from '@styled-system/theme-get';
import { cardSizes } from '../ProductCard/ProductCard';

const containerWidth = cardSizes.width[0]*3 + cardSizes.gap*2;
const containerWidthDesktop = cardSizes.width[1]*3 + cardSizes.width[1]*2;

const OuterContainer = styled.div`
  overflow-x: scroll;
  width: 100%;
  height: auto;
  max-width: ${containerWidth};
  @media (min-width: ${themeGet('breakpoints[1]')}) {
    overflow-x: auto;
    max-width: ${containerWidthDesktop};
  }
  
  ${compose(size, layout, space)}
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: ${containerWidth};
  @media (min-width: ${themeGet('breakpoints[1]')}) {
    width: ${containerWidthDesktop};
  }
`;

const ProductCardScrollContainer = ({ children }) => {
  return (
    <OuterContainer
      my={[6,6,7]}
      mr='auto'
      ml={[3, 6, 'auto']}
    >
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
};

export default ProductCardScrollContainer;
