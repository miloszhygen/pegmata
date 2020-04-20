import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import classNames from 'classnames';

const menuButtonClasses = () =>
  classNames({
    menuButton: true,
  });

const hamburgerClasses = open =>
  classNames({
    hamburger: true,
    'hamburger--slider': true,
    'is-active': open,
  });

// from here: https://jonsuh.com/hamburgers/
const MenuButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={menuButtonClasses()}>
      <button className={hamburgerClasses(open)} type="button" onClick={() => setOpen(!open)}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  );
};

// MenuButton.propTypes = {};

export default MenuButton;
