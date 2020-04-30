import React from 'react';
import ProductCard from './ProductCard';

export default {
  title: 'Components|ProductCard',
  component: ProductCard,
};

export const standard = () => (
  <div style={{ height: '500px', width: '326px' }}>
    <ProductCard />
  </div>
);
