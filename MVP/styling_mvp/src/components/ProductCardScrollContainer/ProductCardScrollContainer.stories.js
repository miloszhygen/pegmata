import React from 'react';
import ProductCardScrollContainer from './ProductCardScrollContainer';
import ProductCard from '../ProductCard/ProductCard';
import { ProductCardStandard } from '../ProductCard/ProductCard.stories';

export default {
  title: 'ProductCardScrollContainer',
  component: ProductCardScrollContainer,
  subcomponents: ProductCard,
};

const ProductCardScrollContainerTemplate = ({ cards, ...args }) => (
  <ProductCardScrollContainer {...args}>
    {cards.map((card) => <ProductCard {...card} />)}
  </ProductCardScrollContainer>
);

export const ProductCardScrollContainerStandard = ProductCardScrollContainerTemplate.bind({});
ProductCardScrollContainerStandard.args = {
  cards: [ProductCardStandard.args, ProductCardStandard.args, ProductCardStandard.args],
};
