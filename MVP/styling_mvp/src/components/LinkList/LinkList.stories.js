import React from 'react';
import LinkList from './index';

export default {
  title: 'LinkList',
  component: LinkList,
};

const listData = [
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
    text: 'Se alle modelene våre',
  },
];

const LinkListTemplate = args => <LinkList {...args} />;

export const LinkListStandard = LinkListTemplate.bind({});
LinkListStandard.args = {
  list: listData,
};

export const LinkListSecondary = LinkListTemplate.bind({});
LinkListSecondary.args = {
  list: listData,
  secondary: true,
};
