import React from 'react';
import Link from './Link';

export default {
  title: 'Link',
  component: Link,
};


const Template = args => <Link {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  text: 'slik virker det'
};
/*

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
    Logg inn
  </Link>
);
*/
