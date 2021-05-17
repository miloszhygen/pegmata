import React from 'react';
import ProductCard from './ProductCard';

export default {
  title: 'ProductCard',
  component: ProductCard,
};

const cardData = [
  {
    href: '#',
    text: 'Slik virker det',
  },
  {
    href: '#',
    text: 'Våre priser',
  },
  {
    href: '#',
    text: 'Se alle modelene våre',
  },
];

const ProductCardTemplate = args => <ProductCard {...args} />;

export const ProductCardStandard = ProductCardTemplate.bind({});
ProductCardStandard.args = {

};

