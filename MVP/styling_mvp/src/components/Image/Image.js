import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const imageClasses = () =>
  classNames({
    image: true,
  });

const Image = ({ src, altText, className }) => {
  const classes = className.length > 0 ? `${imageClasses()} ${className}` : imageClasses();
  return <img className={classes} src={src} alt={altText} />;
};

Image.defaultProps = {
  className: '',
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Image;
