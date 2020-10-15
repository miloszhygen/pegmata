import styled from 'styled-components';
import propTypes from '@styled-system/prop-types';
import { color, space, layout, flexbox, compose } from 'styled-system';

const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  compose(space, color, layout, flexbox),
);

Box.propTypes = {
  ...propTypes.color,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.flexbox,
};
export default Box;
