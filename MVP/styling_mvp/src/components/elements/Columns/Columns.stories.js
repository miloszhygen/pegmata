import React from 'react';
import Columns from './index';

export default {
  title: 'Elements|Columns',
  component: Columns,
};

const Placeholder = (
  <span style={{ width: '100%', height: '100%', background: 'blue', borderRadius: '.25rem' }}>
    blah
  </span>
);

export const regular = () => (
  <Columns>
    <Columns.Column size="5">
      <Placeholder />
    </Columns.Column>
    <Columns.Column size="7">
      <Placeholder />
    </Columns.Column>
  </Columns>
);

export const withMultiline = () => (
  <Columns>
    <Columns.Column size="1">
      <Placeholder />
    </Columns.Column>
    <Columns.Column size="11">
      <Placeholder />
    </Columns.Column>
    <Columns.Column size="3">
      <Placeholder />
    </Columns.Column>
    <Columns.Column size="11">
      <Placeholder />
    </Columns.Column>
  </Columns>
);

export const withBreakpoints = () => (
  <Columns>
    <Columns.Column size={{ xs: 5, sm: 10, md: 2 }}>
      <Placeholder />
    </Columns.Column>
    <Columns.Column size={{ xs: 7, sm: 2, md: 10 }}>
      <Placeholder />
    </Columns.Column>
  </Columns>
);
