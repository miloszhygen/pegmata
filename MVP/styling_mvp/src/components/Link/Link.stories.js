import React from 'react';
import Link from './Link';

export default {
  title: 'Components|Link',
  component: Link,
};

export const standard = () => (
  <Link href="#">
    <span>Slik virker det</span>
  </Link>
);

export const arrowRight = () => (
  <Link href="#" arrow>
    Slik virker det
  </Link>
);

export const arrowLeft = () => (
  <Link href="#" arrowLeft>
    Slik virker det
  </Link>
);

export const noUnderline = () => (
  <Link href="#" noUnderline>
    Slik virker det
  </Link>
);

export const secondary = () => (
  <Link href="#" secondary>
    Slik virker det
  </Link>
);

export const small = () => (
  <Link href="#" small>
    Slik virker det
  </Link>
);

export const medium = () => (
  <Link href="#" medium>
    Slik virker det
  </Link>
);

export const button = () => (
  <Link href="#" button>
    Slik virker det
  </Link>
);

export const buttonSecondary = () => (
  <Link href="#" buttonSecondary>
    Slik virker det
  </Link>
);
