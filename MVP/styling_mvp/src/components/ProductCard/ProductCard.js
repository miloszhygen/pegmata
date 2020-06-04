import React from 'react';
import Image from '../Image';
import Heading from '../Heading';

import sledSmall from '../../assets/images/sledSmall.svg';
import sledLarge from '../../assets/images/sledLarge.svg';
import Link from '../Link';

// TODO: get data in as props
const ProductCard = () => (
  <div className="productCard">
    <div className="productCard__image hide-desktop">
      <Image src={sledSmall} altText="small sled" />
    </div>
    <div className="productCard__image hide-mobile">
      <Image src={sledLarge} altText="large sled" />
    </div>
    <Heading h="h3" className="productCard__title">
      Familie sparken
    </Heading>
    <hr className="productCard__line" />
    <p className="productCard__text">
      Passer til deg som vil ta med ungen til barnehagen eller gå fine turer i helgene.
    </p>
    <div className="productCard__price">
      <Heading h="h0" className="h3">
        199,- i uka
      </Heading>
    </div>
    <div className="productCard__button">
      <Link button>Bestill og hent</Link>
    </div>
  </div>
);

export default ProductCard;
