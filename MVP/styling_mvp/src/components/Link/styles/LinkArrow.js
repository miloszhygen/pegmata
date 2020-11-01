import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { layout } from 'styled-system';

import arrowLeftSrc from '../../../assets/icons/arrow-left.svg';
import arrowRightSrc from '../../../assets/icons/arrow-right.svg';

const LinkArrow = styled.img.attrs(({ left }) => ({
  src: left ? arrowLeftSrc : arrowRightSrc,
  alt: left ? 'arrow-left' : 'arrow-right',
}))`
  ${layout};
`;

LinkArrow.defaultProps = {
  left: false,
};

LinkArrow.propTypes = {
  left: PropTypes.bool,
};

export default LinkArrow;
