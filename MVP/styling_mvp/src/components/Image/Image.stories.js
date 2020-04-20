import React from 'react';
import Image from './Image';

import mainImage from '../../assets/images/mainImage.png';

export default {
  title: 'Components|Image',
  component: Image,
};

export const standard = () => <Image src={mainImage} altText={'child being pulled on spark'} />;
