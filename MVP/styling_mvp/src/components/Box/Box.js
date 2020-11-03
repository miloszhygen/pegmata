import styled from 'styled-components/macro';
import propTypes from '@styled-system/prop-types';
import { color, space, layout, flexbox, border, compose } from 'styled-system';

const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  compose(space, color, layout, flexbox, border),
);

Box.propTypes = {
  ...propTypes.color,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.flexbox,
};
export default Box;
