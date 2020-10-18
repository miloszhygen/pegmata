import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import Button from '../Button';
import { H1 } from '../Heading';

const Header = ({ bg }) => (
  <Box
    display="flex"
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
    px={[3, 4, 5, 6, 6]}
    bg={bg}
  >
    <H1>Spark.</H1>
    <div>
      <Button
        mr={[1, 1, 2, 2, 3]}
        display={['none', 'none', 'inline-block', 'inline-block', 'inline-block']}
      >
        Logg inn
      </Button>
      <Button>menu</Button>
    </div>
  </Box>
);

Header.defaultProps = {};

Header.propTypes = {
  bg: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
