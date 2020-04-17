import React from 'react';
import Headings from './Headings';

export default {
  title: 'Components|Header',
  component: Headings,
};

export const h1 = () => <Headings h="h1">Spark</Headings>;
export const h1Primary = () => (
  <Headings h="h1" className="h1--primary-color">
    Spark
  </Headings>
);
export const h1Secondary = () => (
  <Headings h="h1" className="h1--secondary-color">
    Spark
  </Headings>
);
export const h1Uppercase = () => (
  <Headings h="h1" className="h1--uppercase">
    Spark
  </Headings>
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
export const h2 = () => <Headings h="h2">Spark</Headings>;
export const h3 = () => <Headings h="h3">Spark</Headings>;
export const h4 = () => <Headings h="h4">Spark</Headings>;
export const h5 = () => <Headings h="h5">Spark</Headings>;
