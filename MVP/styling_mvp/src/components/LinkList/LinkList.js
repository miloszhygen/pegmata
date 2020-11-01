import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import Box from '../Box';

const LinkList = ({ list, secondary, ...rest }) => (
  <Box {...rest}>
    {list.map((link, i) => (
      <Link.LinkWrapper listUnderline key={i} secondary={secondary}>
        <Link
          href={link.href}
          fontSize={[16, 16, 24, 24, 24]}
          lineHeight="list"
          noUnderline
          secondary={secondary}
        >
          {link.text}
        </Link>
        <Link.LinkArrow height={[16, 16, 24, 24, 24]} />
      </Link.LinkWrapper>
    ))}
  </Box>
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
