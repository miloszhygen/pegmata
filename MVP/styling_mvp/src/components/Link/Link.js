import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import arrowRight from '../../assets/icons/arrow-right.svg';
import arrowLeft from '../../assets/icons/arrow-left.svg';

const linkClasses = (
  small,
  medium,
  secondary,
  button,
  buttonSecondary,
  noUnderline,
  listUnderline,
  lineHeightTall,
  arrow,
  arrowLeft,
) =>
  classNames({
    'b-link--small': small,
    'b-link--medium': medium || arrow || arrowLeft,
    'b-link--secondary': secondary,
    'b-link--button': button,
    'b-link--button-secondary': buttonSecondary,
    'b-link--no-underline': noUnderline || listUnderline,
    'b-link--line-height-tall': lineHeightTall,
  });

const Link = props => (
  <div className={props.listUnderline ? 'b-link b-link--list-underline' : 'b-link'}>
    {props.arrowLeft && <img className="b-link--arrow" src={arrowLeft} alt="arrow-left" />}
    <a
      href={props.href}
      className={linkClasses(
        props.small,
        props.medium,
        props.secondary,
        props.button,
        props.buttonSecondary,
        props.noUnderline,
        props.lineHeightTall,
        props.listUnderline,
        props.arrow,
        props.arrowLeft,
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
  medium: PropTypes.bool,
  secondary: PropTypes.bool,
  button: PropTypes.bool,
  buttonSecondary: PropTypes.bool,
  noUnderline: PropTypes.bool,
  listUnderline: PropTypes.bool,
  lineHeightTall: PropTypes.bool,
  children: PropTypes.node,
};

export default Link;
