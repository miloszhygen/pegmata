import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import arrowRightSrc from '../../assets/icons/arrow-right.svg';
import arrowLeftSrc from '../../assets/icons/arrow-left.svg';

const truncateString = (str, num) => (str.length <= num ? str : str.slice(0, num) + '...');

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

const Link = ({
  href,
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
  text,
  children,
}) => (
  <div className={listUnderline ? 'link link--list-underline' : 'link'}>
    {arrowLeft && <img className="link--arrow" src={arrowLeftSrc} alt="arrow-left" />}
    <a
      href={href}
      className={linkClasses(
        small,
        medium,
        secondary,
        button,
        buttonSecondary,
        noUnderline,
        lineHeightTall,
        listUnderline,
        arrow,
        arrowLeft,
      )}
    >
      {children ? children : truncateString(text, 16)}
    </a>
    {arrow && <img className="link--arrow" src={arrowRightSrc} alt="arrow-right" />}
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
  text: PropTypes.string,
  children: PropTypes.node,
};

export default Link;
