import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';

const LinkList = ({ list }) => (
  <div className="linkList">
    {list.map((link, i) => (
      <Link key={i} href={link.href} arrow listUnderline medium lineHeightTall>
        {link.text}
      </Link>
    ))}
  </div>
);

LinkList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
};

export default LinkList;
