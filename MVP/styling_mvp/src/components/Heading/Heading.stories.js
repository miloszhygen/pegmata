import React from 'react';
import Heading from './Heading';

export default {
  title: 'Components|Header',
  component: Heading,
};

export const h1 = () => <Heading h="h1">Spark</Heading>;
export const h1Primary = () => (
  <Heading h="h1" className="h1--primary-color">
    Spark
  </Heading>
);
export const h1Secondary = () => (
  <Heading h="h1" className="h1--secondary-color">
    Spark
  </Heading>
);
export const h1Uppercase = () => (
  <Heading h="h1" className="h1--uppercase">
    Spark
  </Heading>
);
/*export const h1Light = () => (
  <Header h="h1" className="h1--light">
    Spark
  </Header>
);
export const h1Bold = () => (
  <Header h="h1" className="h1--bold">
    Spark
  </Header>
);*/
export const h2 = () => <Heading h="h2">Spark</Heading>;
export const h3 = () => <Heading h="h3">Spark</Heading>;
export const h4 = () => <Heading h="h4">Spark</Heading>;
export const h5 = () => <Heading h="h5">Spark</Heading>;
