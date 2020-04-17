import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import arrowRight from '../../assets/icons/arrow-right.svg';
import arrowLeft from '../../assets/icons/arrow-left.svg';

const linkClasses = (small, secondary, button, buttonSecondary, noUnderline) =>
  classNames({
    'b-link--small': small,
    'b-link--secondary': secondary,
    'b-link--button': button,
    'b-link--button-secondary': buttonSecondary,
    'b-link--no-underline': noUnderline,
  });

const Link = props => (
  <div className="b-link">
    {props.arrowLeft && <img className="b-link--arrow" src={arrowLeft} alt="arrow-left" />}
    <a
      href={props.href}
      className={linkClasses(
        props.small,
        props.secondary,
        props.button,
        props.buttonSecondary,
        props.noUnderline,
      )}
    >
      {props.children}
    </a>
    {props.arrow && <img className="b-link--arrow" src={arrowRight} alt="arrow-right" />}
  </div>
);

Link.propTypes = {
  href: PropTypes.string,
  arrow: PropTypes.bool,
  arrowLeft: PropTypes.bool,
  small: PropTypes.bool,
  secondary: PropTypes.bool,
  button: PropTypes.bool,
  buttonSecondary: PropTypes.bool,
  noUnderline: PropTypes.bool,
  children: PropTypes.node,
};

export default Link;
