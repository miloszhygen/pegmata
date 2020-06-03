import React from 'react';
import LinkList from './LinkList';

export default {
  title: 'Components|LinkList',
  component: LinkList,
};

const standardData = [
  {
    href: '#',
    text: 'Slik virker det',
  },
  {
    href: '#',
    text: 'Våre priser',
  },
  {
    href: '#',
    text: 'Se alle modelene vår',
  },
];

export const standard = () => <LinkList list={standardData} />;
