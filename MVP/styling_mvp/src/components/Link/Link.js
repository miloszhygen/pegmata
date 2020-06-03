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
    'link--small': small,
    'link--medium': medium || arrow || arrowLeft,
    'link--secondary': secondary,
    'link--button': button,
    'link--button-secondary': buttonSecondary,
    'link--no-underline': noUnderline || listUnderline,
    'link--line-height-tall': lineHeightTall,
  });

const Link = props => (
  <div className={props.listUnderline ? 'link link--list-underline' : 'link'}>
    {props.arrowLeft && <img className="link--arrow" src={arrowLeft} alt="arrow-left" />}
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
    {props.arrow && <img className="link--arrow" src={arrowRight} alt="arrow-right" />}
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
