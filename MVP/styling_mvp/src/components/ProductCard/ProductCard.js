import React from 'react';
import Image from '../Image';
import sledSmall from '../../assets/images/sledSmall.svg';
import sledLarge from '../../assets/images/sledLarge.svg';
import { H3 } from '../Heading';
import Text from '../Text';
import Box from '../Box';
import { LinkButton } from '../Link';

// also used to calculate container, so unitless
export const cardSizes = {
  width: [300, 330],
  height: [500, 600],
  gap: 25,
};

const ProductCard = () => {
  return (
    <Box
      width={[`${cardSizes.width[0]}px`, `${cardSizes.width[1]}`]}
      height={[`${cardSizes.height[0]}px`, `${cardSizes.height[1]}`]}
    >
      <Image src={sledSmall} />
      <H3>Familiesparken</H3>
      <hr />
      <Text>Passer til deg som vil ta med ungen til barnehagen eller gå fine turer i helgene.</Text>
      <H3>199,- i uka</H3>
      <LinkButton>Bestill og hent</LinkButton>
    </Box>
  );
};

export default ProductCard;
