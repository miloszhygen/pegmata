import React from 'react';
import ProductCardScrollContainer from './ProductCardScrollContainer';
import ProductCard from '../ProductCard';

export default {
  title: 'Components|ProductCardScrollContainer',
  component: ProductCardScrollContainer,
};

export const standard = () => (
  <div style={{ width: '400px' }}>
    <ProductCardScrollContainer>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ProductCardScrollContainer>
  </div>
);
