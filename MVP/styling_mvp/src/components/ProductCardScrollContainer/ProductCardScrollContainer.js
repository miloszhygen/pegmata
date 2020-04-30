import React from 'react';
import PropTypes from 'prop-types';

const ProductCardScrollContainer = ({ children }) => (
  <div className="productCardContainerOuter">
    <div className="productCardContainerInner">{children}</div>
  </div>
);

ProductCardScrollContainer.propTypes = {
  children: PropTypes.node,
};

export default ProductCardScrollContainer;
