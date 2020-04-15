import React from 'react';
import Header from './Header';

export default {
  title: 'Components|Header',
  component: Header,
};

export const h1 = () => <Header h="h1">Spark</Header>;
export const h1Primary = () => (
  <Header h="h1" className="h1--primary-color">
    Spark
  </Header>
);
export const h1Secondary = () => (
  <Header h="h1" className="h1--secondary-color">
    Spark
  </Header>
);
export const h1Uppercase = () => (
  <Header h="h1" className="h1--uppercase">
    Spark
  </Header>
);
export const h1Light = () => (
  <Header h="h1" className="h1--light">
    Spark
  </Header>
);
export const h1Bold = () => (
  <Header h="h1" className="h1--bold">
    Spark
  </Header>
);
export const h2 = () => <Header h="h2">Spark</Header>;
export const h3 = () => <Header h="h3">Spark</Header>;
export const h4 = () => <Header h="h4">Spark</Header>;
export const h5 = () => <Header h="h5">Spark</Header>;
