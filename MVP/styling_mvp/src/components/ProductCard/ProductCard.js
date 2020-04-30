import React from 'react';
import Image from '../Image';
import Heading from '../Heading';

import sledSmall from '../../assets/images/sledSmall.svg';

const ProductCard = () => (
  <div className="productCard">
    <div className="productCard__image">
      <Image src={sledSmall} altText="small sled" />
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
      <button>Bestill og hent</button>
    </div>
  </div>
);

export default ProductCard;
