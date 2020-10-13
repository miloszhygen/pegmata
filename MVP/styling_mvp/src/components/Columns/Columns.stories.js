import React from 'react';
import Columns from './index';

export default {
  title: 'Elements/Columns',
  component: Columns,
};

const Placeholder = ({ label }) => (
  <div style={{ width: '100%', height: '100%', background: 'lightBlue', borderRadius: '.25rem' }}>
    {label}
  </div>
);
export const regular = () => (
  <Columns>
    <Columns.Column size="5">
      <Placeholder label="5" />
    </Columns.Column>
    <Columns.Column size="7">
      <Placeholder label="7" />
    </Columns.Column>
  </Columns>
);

// TODO: this doesnt seem to work, they are all on one line
export const withMultiline = () => (
  <Columns>
    <Columns.Column size="1">
      <Placeholder label="1" />
    </Columns.Column>
    <Columns.Column size="11">
      <Placeholder label="11" />
    </Columns.Column>
    <Columns.Column size="3">
      <Placeholder label="3" />
    </Columns.Column>
    <Columns.Column size="11">
      <Placeholder label="11" />
    </Columns.Column>
  </Columns>
);

export const withBreakpoints = () => (
  <Columns>
    <Columns.Column size={{ xs: 5, sm: 10, md: 2 }}>
      <Placeholder label="xs: 5 - sm: 10 - md: 2" />
    </Columns.Column>
    <Columns.Column size={{ xs: 7, sm: 2, md: 10 }}>
      <Placeholder label="xs: 7 - sm: 2 - md: 10" />
    </Columns.Column>
  </Columns>
);
