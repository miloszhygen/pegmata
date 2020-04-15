import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  if (props.h === 'h1') return <h1 className={props.className}>{props.children}</h1>;
  else if (props.h === 'h2') return <h2 className={props.className}>{props.children}</h2>;
  else if (props.h === 'h3') return <h3 className={props.className}>{props.children}</h3>;
  else if (props.h === 'h4') return <h4 className={props.className}>{props.children}</h4>;
  else if (props.h === 'h5') return <h5 className={props.className}>{props.children}</h5>;
  else if (props.h === 'h6') return <h6 className={props.className}>{props.children}</h6>;
  else if (props.h === 'h0') return <div className={props.className}>{props.children}</div>;
  else return '';
};

Header.propTypes = {
  h: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h0']).isRequired,
  className: PropTypes.string,
};

export default Header;
